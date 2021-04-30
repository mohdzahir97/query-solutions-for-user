const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});

const express=require("express");
const app=express();
const router=require("./router/router");
const cookieParser=require("cookie-parser");

const port=process.env.PORT;
require("./db/conn");

app.use(express.json());
app.use(router);
app.use(cookieParser());



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
