const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express()
app.use(cors())
app.use(express.json())

const roleRoutes=require("./src/routes/RoleRoutes")
app.use(roleRoutes)

const userRoutes=require("./src/routes/UserRoutes")
app.use(userRoutes)

const stateRoutes=require("./src/routes/StateRotes");
app.use("/state",stateRoutes);

const cityRoutes=require("./src/routes/CityRoutes");
app.use("/city",cityRoutes);

const areaRoutes=require("./src/routes/AreaRoutes");
app.use("/area",areaRoutes);

const categoryRoutes=require("./src/routes/CategoryRoutes");
app.use("/category",categoryRoutes);

const propertyRoutes=require("./src/routes/PropertyRoutes");
app.use("/property",propertyRoutes);

const inquiryRoutes=require("./src/routes/InquiryRoutes");
app.use(inquiryRoutes);

const agentRoutes=require("./src/routes/AgentRoutes");
app.use("/agent",agentRoutes);

const dashbordRoutes=require("./src/routes/DashbordRoutes");
app.use(dashbordRoutes);

mongoose.connect("mongodb://localhost:27017/real_estate_finder").then(()=>{
    console.log("Database Connected..")

})


const PORT=3030
app.listen(PORT,()=>{
    console.log("Server Start on",PORT)
})