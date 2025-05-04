const User = require('../models/UserModel');
const Property = require('../models/PropertyModel');

const getAdminSummary = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProperties = await Property.countDocuments();
    const soldProperties = await Property.find({ isSold: true }).populate('soldTo', 'name');

    res.json({
      totalUsers,
      totalProperties,
      soldProperties
    });
  } catch (err) {
    res.status(500).json({
         error: err.message
         });
  }
};

 module.exports={
    getAdminSummary
 }
