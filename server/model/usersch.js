const mongoose=require("mongoose");
const valiadator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        // unique:[true,"Email Already Exists!"],
        validate(value){
            if(!(valiadator.isEmail(value))){
                throw new Error("please Enter email in correct format");

            }
        }
    },
    mobile:{
        type:Number,
        require:true
    },
    job:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    Date:{
        type: Date,
        default:Date.now
    },

    messages:[
        {
            name:{
                type:String,
                require:true
            },
            email:{
                type:String,
                require:true,
            },
            mobile:{
                type:Number,
                require:true
            },
            message:{
                type:String,
                require:true
            }
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
})

userSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next()
})
userSchema.methods.addMessage=async function(name,email,mobile,message){
    this.messages= this.messages.concat({name,email,mobile,message})
    await this.save();
    return this.messages;
}

userSchema.methods.generateAuthToken=async function(next){
    const token=await jwt.sign({_id:this._id.toString()},process.env.SEC_key);
    this.tokens=await this.tokens.concat({token:token});
    await this.save();
    return token;
}


const UserModel=new mongoose.model("user",userSchema);

module.exports=UserModel;