const routes=require("express").Router()

const userController=require("../controllers/UserController")

routes.post("/user",userController.signup);
routes.post("/user/login",userController.loginUser);
routes.get("/user",userController.getAllUsers);
routes.delete("/user/:id",userController.deleteUser);
routes.get("/userId/:id",userController.getUserById);

module.exports=routes