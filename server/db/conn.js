const mongoose=require("mongoose");
const DB=process.env.DB;

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})
.then(()=>{
    console.log("Connect Successfully");
})
.catch((err)=>{
    console.log(err);
})

// "mongodb://localhost:27017/mernfspro"