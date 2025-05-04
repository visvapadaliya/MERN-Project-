const routes=require("express").Router();

const agentController=require("../controllers/AgentController");

routes.post("/addagent",agentController.addAgent);

routes.get("/allagent",agentController.getAllAgent);

routes.delete("/deleteagent",agentController.deleteAgent);

module.exports=routes;