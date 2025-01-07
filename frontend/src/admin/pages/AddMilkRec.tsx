import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Label, TextInput } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks";
import { createMilkRecordService } from "../../app/services/milk-service";
import { useEffect, useState } from "react";

// Milk Record Schema (Yup)
const milkRecordSchema = yup.object({
  farmerId: yup.string().required("Farmer ID is required"),
  date: yup.string().required("Date is required"),
  morning: yup.number().min(0, "Value must be greater than or equal to 0").default(0),
  afternoon: yup.number().min(0, "Value must be greater than or equal to 0").default(0),
  evening: yup.number().min(0, "Value must be greater than or equal to 0").default(0),
  total: yup.number().min(0, "Value must be greater than or equal to 0"),
});

const MilkRecordInputPage = () => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.dashboard); // Adjust this selector to match your Redux setup
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const formik = useFormik({
    initialValues: {
      farmerId: "",
      date: "",
      morning: 0,
      afternoon: 0,
      evening: 0,
      total: 0,
    },
    validationSchema: milkRecordSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(createMilkRecordService(values)).unwrap();
        setSuccessMessage("Milk record added successfully!");
        setErrorMessage("");
        formik.resetForm();
      } catch (error) {
        setErrorMessage("Failed to add milk record. Please try again.");
        setSuccessMessage("");
      }
    },
  });

  // Update total milk when individual milk values change
  useEffect(() => {
    const total = (formik.values.morning || 0) + (formik.values.afternoon || 0) + (formik.values.evening || 0);
    formik.setFieldValue("total", total);
  }, [formik.values.morning, formik.values.afternoon, formik.values.evening]);

  // Set the date to today's date
  const handleSelectToday = () => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    formik.setFieldValue("date", today);
  };

  return (
    <div className="shadow p-5 border-t-4 border-t-red-500 rounded-xl bg-white">
      <h3 className="font-bold">Enter Milk Record Information</h3>
      <form className="mt-4 space-y-16" onSubmit={formik.handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5 gap-y-10">
          {/* Farmer ID Input */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="farmerId" value="Farmer ID" />
            </div>
            <TextInput
              id="farmerId"
              type="text"
              placeholder="Enter Farmer ID"
              {...formik.getFieldProps("farmerId")}
              color={formik.touched.farmerId && formik.errors.farmerId ? "failure" : undefined}
              helperText={formik.touched.farmerId && formik.errors.farmerId ? formik.errors.farmerId : ""}
            />
          </div>

          {/* Date */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Date" />
            </div>
            <div className="flex space-x-2">
              <TextInput
                id="date"
                type="date"
                {...formik.getFieldProps("date")}
                color={formik.touched.date && formik.errors.date ? "failure" : undefined}
                helperText={formik.touched.date && formik.errors.date ? formik.errors.date : ""}
              />
              <Button type="button" onClick={handleSelectToday} className="self-center">
                Select Today
              </Button>
            </div>
          </div>
        </div>

        {/* Milk Quantities */}
        <div className="grid md:grid-cols-3 gap-5 gap-y-10">
          {/* Morning */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="morning" value="Morning Milk (Liters)" />
            </div>
            <TextInput
              id="morning"
              type="number"
              {...formik.getFieldProps("morning")}
              color={formik.touched.morning && formik.errors.morning ? "failure" : undefined}
              helperText={formik.touched.morning && formik.errors.morning ? formik.errors.morning : ""}
            />
          </div>

          {/* Afternoon */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="afternoon" value="Afternoon Milk (Liters)" />
            </div>
            <TextInput
              id="afternoon"
              type="number"
              {...formik.getFieldProps("afternoon")}
              color={formik.touched.afternoon && formik.errors.afternoon ? "failure" : undefined}
              helperText={formik.touched.afternoon && formik.errors.afternoon ? formik.errors.afternoon : ""}
            />
          </div>

          {/* Evening */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="evening" value="Evening Milk (Liters)" />
            </div>
            <TextInput
              id="evening"
              type="number"
              {...formik.getFieldProps("evening")}
              color={formik.touched.evening && formik.errors.evening ? "failure" : undefined}
              helperText={formik.touched.evening && formik.errors.evening ? formik.errors.evening : ""}
            />
          </div>
        </div>

        {/* Total Milk */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="total" value="Total Milk (Liters)" />
          </div>
          <TextInput id="total" type="number" value={formik.values.total} disabled />
        </div>

        {/* Submit Button */}
        <Button disabled={formik.isSubmitting} isProcessing={formik.isSubmitting} type="submit">
          {formik.isSubmitting ? "Uploading..." : "Upload Milk Record"}
        </Button>

        {/* Error/Success Messages */}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </form>
    </div>
  );
};

export default MilkRecordInputPage;
