const routes=require("express").Router();

const dashbordController=require("../controllers/DashbordController");

routes.get("/dashbord",dashbordController.getAdminSummary);

module.exports=routes;
