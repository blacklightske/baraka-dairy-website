import * as yup from "yup";
import { useFormik } from "formik";
import { IoCloseCircle } from "react-icons/io5";
import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import RichTextEditorTinyMCE from "../components/RichTextEditorTinyMCE";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks";
import { createProductService } from "../../app/services/product-service";
import { useEffect } from "react";

//product schema created by yup
let productSchema = yup.object({
  name: yup.string().required("Product Name is Required"),
  price: yup.string().required("Product price is required"),
  description: yup.string().required("Product description is required"),
  category: yup.string().required("Category is required"),
  cover_image: yup.string().required("Cover image is required"),
  other_images: yup.array(yup.string()),
});

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.dashboard);
  //function to get file base64
  const handleFileChange = (file: File | null): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(undefined);
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };

      fileReader.onerror = () => {
        reject(new Error("Failed to read file."));
      };
    });
  };

  //function to handle single file input
  const handleSingleFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    try {
      const image = await handleFileChange(file); // Get base64 string
      formik.setFieldValue("cover_image", image); // Set the form field value
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  // function to handle multiple images input (other images)
  const handleMultipleFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files ? e.target.files : null;
    try {
      let images: string[] = [];
      if (files) {
        for (let file of files) {
          const image = await handleFileChange(file); // Get base64 string
          if (image) {
            images.push(image);
          }
        }
      }
      formik.setFieldValue("other_images", images); // Set the form field value
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      cover_image: "",
      other_images: [],
    },
    validationSchema: productSchema,
    onSubmit: async (values) => {
      await dispatch(createProductService(values));
      // console.log(values);
    },
  });

  //clear fields on success
  useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      formik.resetForm();
    }
  }, [success]);

  return (
    <div className="shadow p-5 border-t-4 border-t-red-500 rounded-xl bg-white">
      <h3 className="font-bold">Enter Product Information</h3>
      <form className="mt-4 space-y-16" onSubmit={formik.handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5 gap-y-10">
          {/* property name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="product-name" value="Product Name" />
            </div>
            <TextInput
              id="product-name"
              type="text"
              placeholder="Enter Product Name"
              {...formik.getFieldProps("name")}
              color={
                formik.touched.name && formik.errors.name
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""
              }
            />
          </div>

          {/* property price  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Product-Price" value="Product Price" />
            </div>
            <TextInput
              id="Product-Price"
              type="text"
              placeholder="Enter Product Price"
              {...formik.getFieldProps("price")}
              color={
                formik.touched.price && formik.errors.price
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.price && formik.errors.price
                  ? formik.errors.price
                  : ""
              }
            />
          </div>

          {/* property area  */}
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="property-category" value="Property Category" />
            </div>
            <Select
              id="property-category"
              required
              {...formik.getFieldProps("category")}
              color={
                formik.touched.category && formik.errors.category
                  ? "failure"
                  : undefined
              }
              helperText={
                formik.touched.category && formik.errors.category
                  ? formik.errors.category
                  : ""
              }
            >
              <option>Please Select Area</option>
              {["Garbage", "Groceries", "Fruits", "Food"].map((d, i) => {
                return (
                  <option key={i} value={d}>
                    {d}
                  </option>
                );
              })}
            </Select>
          </div>
        </div>

        {/* rich text editor */}
        <div className="space-y-3">
          <h3 className="text-sm ml-1">Description</h3>
          <RichTextEditorTinyMCE
            onChange={(content) => formik.setFieldValue("description", content)}
          />
        </div>

        {/* file inputs */}
        <div className="grid grid-cols-3 gap-10 place-items-start w-full">
          <div className="space-y-2 w-full">
            <div>
              <Label htmlFor="cover-image" value="Choose Cover Image" />
            </div>
            <FileInput
              name="cover_image"
              id="cover-image"
              onChange={handleSingleFileInput}
            />

            {formik.values.cover_image && (
              <img
                src={formik.values.cover_image}
                alt=""
                className="w-36 h-full rounded  object-contain my-3"
              />
            )}
          </div>

          <div className="col-span-2 space-y-2 w-[80%]">
            <div>
              <Label htmlFor="multiple-file-upload" value="Other Images" />
            </div>
            <FileInput
              id="multiple-file-upload"
              name="other_images"
              multiple
              onChange={handleMultipleFileInput}
            />

            <div className="my-3">
              {formik.values.other_images.map((file, index) => (
                <div key={index} className="flex gap-36 items-center my-3">
                  <img
                    src={file}
                    alt=""
                    className="w-16 h-16 rounded border object-contain"
                  />
                  <h2>Other Image {index + 1}</h2>

                  <div
                    className="cursor-pointer p-2"
                    onClick={() => {
                      formik.setFieldValue(
                        "other_images",
                        formik.values.other_images.filter(
                          (_, index2) => index2 !== index
                        )
                      );
                    }}
                  >
                    <IoCloseCircle className="text-2xl text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          disabled={formik.isSubmitting}
          isProcessing={formik.isSubmitting}
          type="submit"
        >
          {formik.isSubmitting ? "Uploading..." : "Upload new Product"}
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
