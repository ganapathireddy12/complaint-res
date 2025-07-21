const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://yogesh:yogesh123@cluster0.7d3uas0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
   console.log("connected to mongodb")
})