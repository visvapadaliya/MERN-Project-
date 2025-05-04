const routes=require("express").Router()

const roleController=require("../controllers/RoleController")

routes.post("/role",roleController.addRole);

routes.get("/role",roleController.getAllRoles);

routes.delete("/role/:id",roleController.deleteRole)

routes.get("/role/:id",roleController.getRoleById)


module.exports=routes