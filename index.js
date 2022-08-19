const express = require("express")

const mongoose= require("mondgoose")

const app= express()

const URL ="mongodb+srv://cristo:kodemia123@kodemia.k1w2emh.mongodb.net/kodemia"



mongoose.connect(URL)
.then (()=>{
    console.log("conect to base data")
    app.listen(8080,()=>{
        console.log("server listening")
    })
    
})
.catch(()=>{
    console.log("error",error)
})