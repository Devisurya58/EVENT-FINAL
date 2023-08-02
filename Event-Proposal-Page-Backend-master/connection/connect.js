const mongoose=require("mongoose")
require("dotenv").config();



mongoose.connect("mongodb+srv://DEVI:mangodb123@cluster0.pa9e2gu.mongodb.net/event",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log('Connected')
    }).catch((err)=>{
        console.log("Error:",err)
    })
