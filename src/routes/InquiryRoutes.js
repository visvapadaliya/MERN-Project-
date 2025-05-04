const routes=require("express").Router();

const inquiryController=require("../controllers/InquiryController");

routes.post("/inquiry",inquiryController.inquiryNow);

module.exports=routes;