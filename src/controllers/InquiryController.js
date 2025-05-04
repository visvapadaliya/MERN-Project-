const inquiryModel=require("../models/InquiryModel");


const inquiryNow = async (req, res) => {
  try {
    const { propertyId, userId, contact, message } = req.body;

    const saved = await inquiryModel.create({
      propertyId,
      userId,
      contact,
      message,
    });

    // Populate after creating
    const populatedInquiry = await inquiryModel
      .findById(saved._id)
      .populate("propertyId")
      .populate("userId");

    res.status(201).json({
      message: "Inquiry created successfully",
      data: populatedInquiry,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




module.exports={
    inquiryNow
}