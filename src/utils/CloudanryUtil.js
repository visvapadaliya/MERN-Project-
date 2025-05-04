const cloundinary = require("cloudinary").v2;

const uploadFileToCloudinary =async(file)=>{

    cloundinary.config({
        cloud_name:"dqxzybriz", //cloud name
        api_key:"339996422234241", //add your api key
        api_secret:"b2LPD6P9B08sEuKJ6jxGGgKgWNY" //add your secret
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;
};

module.exports={
    uploadFileToCloudinary
}