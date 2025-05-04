const routes=require("express").Router();

const categoryController=require("../controllers/CategoryController");

routes.post("/addcat",categoryController.addCategory);

routes.get("/allcat",categoryController.getAllCategory);

module.exports=routes;