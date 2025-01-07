import MilkRecordSch from "../../models/milksch.js";
import slugify from "slugify";
import { StatusCodes } from "http-status-codes";

const createMilkRecordCtrl = async (req, res, next) => {
  try {
    const { farmerId, morning, afternoon, evening, total, date } = req.body;

    // Generate a slug for the milk record (optional, based on your need)
    const milkRecordSlug = slugify(
      `Milk Record - ${farmerId} - ${new Date(date).toISOString()}`
    );

    // Create a milk record object with the data
    const milkRecordData = {
      farmerId,
      morning,
      afternoon,
      evening,
      total,
      date,
      slug: milkRecordSlug,
    };

    // Create a new milk record in the database
    const newMilkRecord = await MilkRecordSch.create(milk);

    // Respond with the success message and the newly created record
    res.status(StatusCodes.OK).json({
      msg: "Milk record created successfully",
      milkRecord: newMilkRecord,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default createMilkRecordCtrl;
