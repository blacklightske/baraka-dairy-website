import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";  // Import useAppSelector
import { getMilkRecordsService } from "../app/services/milk-service"; 
import { MilkRecordType } from "../types/types"; 

const Search = () => {
  const dispatch = useAppDispatch();
  
  // Access state from Redux
  const { milkRecords, milkLoading, milkError } = useAppSelector((state) => state.dashboard); 

  // Formik for handling the form inputs
  const formik = useFormik({
    initialValues: {
      userId: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: async (values) => {
      try {
        const { userId, startDate, endDate } = values;
        // Call the service to get records based on userId and date range
        await dispatch(getMilkRecordsService({ userId, startDate, endDate })).unwrap();
      } catch (error: any) {
        console.error("Error fetching milk records:", error);
      }
    },
  });

  return (
    <div className="shadow p-5 border-t-4 border-t-blue-500 rounded-xl bg-white">
      <h3 className="font-bold">Search Milk Records</h3>
      <form onSubmit={formik.handleSubmit} className="mt-4 space-y-4">
        {/* User ID Input */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="userId" value="Farmer ID (nationalId)" />
          </div>
          <TextInput
            id="nationalId"
            type="text"
            placeholder="Enter Farmer ID"
            {...formik.getFieldProps("nationalI")}
            color={formik.touched.userId && formik.errors.userId ? "failure" : undefined}
            helperText={formik.touched.userId && formik.errors.userId ? formik.errors.userId : ""}
          />
        </div>

        {/* Date Range */}
        <div className="grid md:grid-cols-2 gap-5 gap-y-4">
          {/* Start Date */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="startDate" value="Start Date" />
            </div>
            <TextInput
              id="startDate"
              type="date"
              placeholder="Enter Start Date"
              {...formik.getFieldProps("startDate")}
              color={formik.touched.startDate && formik.errors.startDate ? "failure" : undefined}
              helperText={formik.touched.startDate && formik.errors.startDate ? formik.errors.startDate : ""}
            />
          </div>

          {/* End Date */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="endDate" value="End Date" />
            </div>
            <TextInput
              id="endDate"
              type="date"
              placeholder="Enter End Date"
              {...formik.getFieldProps("endDate")}
              color={formik.touched.endDate && formik.errors.endDate ? "failure" : undefined}
              helperText={formik.touched.endDate && formik.errors.endDate ? formik.errors.endDate : ""}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" isProcessing={formik.isSubmitting || milkLoading}>
          {formik.isSubmitting || milkLoading ? "Searching..." : "Search Records"}
        </Button>
      </form>

      {/* Error/Success Message */}
      {milkError && <p className="text-red-500 mt-4">{milkError}</p>}

      {/* Milk Records Display */}
      {milkRecords.length > 0 && (
        <div className="mt-4">
          <h4 className="font-bold">Milk Records:</h4>
          <ul>
            {milkRecords.map((record) => (
              <li key={record.date} className="p-2 border-b">
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Morning Milk:</strong> {record.morning} Liters</p>
                <p><strong>Afternoon Milk:</strong> {record.afternoon} Liters</p>
                <p><strong>Evening Milk:</strong> {record.evening} Liters</p>
                <p><strong>Total Milk:</strong> {record.total} Liters</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
