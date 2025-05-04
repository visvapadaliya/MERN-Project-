const mailer=require("nodemailer");

const sendingMail = async(to,subject,text)=>{

    const transporter =mailer.createTransport({
        service:'gmail',
        auth:{
            user:"visvapadaliya11@gmail.com",
            pass:"pdgb ojtl cgok ldfv"
        }
    })

    const mailOptions={

        from:'visvapadaliya11@gmail.com',
        to:to,
        subject:subject,
        text:text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports={
    sendingMail
}