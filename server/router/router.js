const express = require('express');
const router = express.Router();
const UserModel=require("../model/usersch");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Auth=require("../middleware/auth");
const cookieParser=require("cookie-parser");

router.use(cookieParser());

router.post('/user',async(req,res)=>{
    try {
        const {name,email,mobile,job,password,cpassword} = req.body;
     
        if(!name || !email || !mobile || !job || !password || !cpassword){
            res.status(422).json({msg:"Please filled all field..."});
        }
        else if(password != cpassword){
            res.status(422).json({msg:"password and confirm password are Not Match..."});

        }else{
            {
                const userExists=await UserModel.findOne({email})
                if(userExists){
                    console.log("This User Already Exists ")
                    res.status(422).json({msg:"This User Already Exists Try Another Email Id..."});
                }else{
                    const userEntryData=await UserModel({name,email,mobile,job,password,cpassword});
                    await userEntryData.save();
                    res.status(201).json({msg:"User Registration Successful."});
    
                }
    
            }

        }
        
    } catch (error) {
        res.status(422).json({msg:error});
    }

})

router.post('/signin',async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            console.log("Please filled all field")
            res.status(400).json({msg:"Please filled all field"});
        }else{
            const userExists=await UserModel.findOne({email});
            if(userExists){      
            // console.log(userExists)

                const isMatch=await bcrypt.compare(password,userExists.password);
                if(isMatch){
                    const token = await userExists.generateAuthToken();
                    // console.log(token)
 
                    res.cookie("jwt",token,{
                        expires:new Date(Date.now()+3000000),
                        httpOnly:true
                    })
                    console.log("success11")
                     res.status(201).json({msg:"User Signin Successfully."});
                }else{
                    console.log("Invalid Credientials1")
                     res.status(400).json({msg:"Invalid Credientials"});
                }          
            }else{
                console.log("Invalid Credientials2")
                res.status(400).json({msg:"Invalid Credientials userExists"});
            }
        }
        
    } catch (error) {
        res.status(400).json({msg:error}); 
    }

})



router.post('/contact',Auth,async (req, res) => {
    try {
        const {name,email,mobile,message}=req.body;
        console.log(req.body.message+"unnnn")

        if(!name||!email||!mobile||!message){
            console.log("1")
            res.status(401).json({msg:"Please filled all field"});
        }else{
          const user= await UserModel.findOne({_id:req.userRoot_id});
          if(user){
              const userData=await user.addMessage(name,email,mobile,message)
              console.log(userData);
              await user.save();
              res.status(201).send("contact data save successfully.");
              res.status(201).json({msg:"contact data save successfully."});
             console.log("2")

          }

        }
        
    } catch (error) {
        console.log("3"+error)
        res.status(401).json({error:error});
    }

});

router.get('/about',Auth, (req, res) => {
    res.send(req.userRoot);

});

router.get('/contactData',Auth, (req, res) => {
    res.status(201).send(req.userRoot);

}); 


router.get('/logout',Auth,async(req, res) => {
    try {
        
    req.userRoot.tokens=req.userRoot.tokens.filter((curEle)=>{
        return curEle.token!=req.token;
    })
  
    res.clearCookie("jwt");
    const user=await req.userRoot.save();
    if(user){
        res.status(201).json({msg:"logout successfuly"});
    }

      
    } catch (error) {
        res.status(401).json({error:error});
        console.log(error)
    }
  


});


module.exports=router;


// router.post('/user',async (req, res) => {
//     try {
//         const userData=new UserModel(req.body);
//         const user=await userData.save();
//         res.status(201).send(user);
        
//     } catch (error) {
//         res.status(401).send(error);
//     }    
// });
// const md=(req,res,next)=>{
//     console.log("middle ware");
//     next()
// }

// router.get('/user',async (req, res,next) => {
//     try {
//         const userData=await UserModel.find();
//         res.status(201).send(userData);
//     } catch (error) {
//         res.status(401).send(error);
//     }
// });

// router.get('/user/:id',async (req, res,next) => {
//     try {
//         const _id=req.params.id;
//         const userData=await UserModel.findById({_id:_id});
//         res.status(201).send(userData);
//     } catch (error) {
//         res.status(401).send(error);
//     }
// });
// router.get('/about', md,(req, res) => {
//     res.send("Aboute Page");
    
// });


// router.get('/contactus', (req, res) => {
//     res.cookie("jwtoken","zahirmohd",{
//         expires:new Date(Date.now()+300),
//         httpOnly:true
//     })

//     res.status(201).send("ContactUs Page");
    
// });