"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useAppSelector } from "../app/hooks/redux-hooks";
import API from "../api/api";
import { toast } from "react-toastify";

//checkout schema created by yup
let checkoutSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is Required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be 10 digits or more"),
  region: yup.string().required("A region is required"),
  address: yup.string().required("An address is required"),
});

export function CheckoutPopup({
  openModal,
  setOpenModal,
  total,
}: {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
  total: string | number | undefined | null;
}) {
  const { cart } = useAppSelector((state) => state.app);

  const tAmount = cart.reduce((a, t) => a + Number(t.price), 0);

  function onCloseModal() {
    setOpenModal(false);
  }

  //formik for form submission
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      region: "",
      address: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values) => {
      console.log({ ...values, cart });
      await API.post("/product/checkout", { ...values, cart, amount: tAmount })
        .then((d) => {
          toast.success(d.data?.msg);
          setOpenModal(false);
        })
        .catch((e) => {
          console.log(e);
          toast.error("There was an error processing your request");
        });
    },
  });

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add details to Checkout
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email Address" />
              </div>
              <TextInput
                id="email"
                type="text"
                placeholder="Enter Email Address"
                {...formik.getFieldProps("email")}
                color={
                  formik.touched.email && formik.errors.email
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                {...formik.getFieldProps("phone")}
                color={
                  formik.touched.phone && formik.errors.phone
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : ""
                }
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="region" value="Region" />
              </div>
              <TextInput
                id="region"
                type="text"
                placeholder="Enter Region"
                {...formik.getFieldProps("region")}
                color={
                  formik.touched.region && formik.errors.region
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.region && formik.errors.region
                    ? formik.errors.region
                    : ""
                }
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Street address" />
              </div>
              <TextInput
                id="address"
                type="text"
                placeholder="Street address"
                {...formik.getFieldProps("address")}
                color={
                  formik.touched.address && formik.errors.address
                    ? "failure"
                    : undefined
                }
                helperText={
                  formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : ""
                }
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Save for later</Label>
              </div>
            </div>
            <div className="w-full">
              <Button
                disabled={formik.isSubmitting}
                isProcessing={formik.isSubmitting}
                type="submit"
                className="w-full"
              >
                Checkout & Pay (Ksh. {total})
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
