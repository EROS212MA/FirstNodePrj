const { application } = require("express")
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://projet2:pass123@cluster0.s8olpzp.mongodb.net/Project2?retryWrites=true&w=majority").then(
  result=> {
    application.listen(300)
  }
).catch(error=>{
  console.log(error)
})