const routes=require("express").Router();
const propertyController=require("../controllers/PropertyController");

routes.post("/addproperty",propertyController.addProperty);

routes.get("/allproperty",propertyController.getAllProperty);

routes.delete("/deleteproperty",propertyController.deleteProperty);

routes.post("/addwithfile",propertyController.addPropertyWithFile);

routes.get("/getproperty/:id",propertyController.getPropertyById);

routes.put("/updateproperty/:id",propertyController.updateProperty);

routes.get("/viewproperty/:userId",propertyController.getAllPropertyByUserId);

routes.get("/category/:categoryId",propertyController.getPropertyByCategoryId);

routes.get("/filters",propertyController.getPropertyByFilters);

module.exports=routes;