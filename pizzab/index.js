import express from 'express';
import cors from 'cors';
import mongoose, { Schema } from 'mongoose';
const app = express();
import jsonwebtoken from 'jsonwebtoken';
import { name } from 'ejs';


app.use(express.json());
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB")
.then(()=>console.log("DB Connected"))
.catch((e)=>console.log("No"));

const confirmCustomOrder= new Schema({
  pizzaName:{
    type:String
  },
  email:{
    type:String
  },
  phone:{
    type:String
  }
})

const pendingCustomOrder= new Schema({
  pizzaName:{
    type:String
  },
  email:{
    type:String
  },
  phone:{
    type:String
  }
})
const pendingOrder = new mongoose.Schema({
  pizzaName:{
    type:String
  },
  email:{
    type:String
  },
  phone:{
    type:String
  },
})
const confirmOrder = new mongoose.Schema({
  pizzaName:{
    type:String
  },
  email:{
    type:String
  },
  phone:{
    type:String
  },
})
const adminSchema=new mongoose.Schema({
  email:{
    type:String
  },
  pass:{
    type:String
  }
})
const userSchema = new mongoose.Schema({
  fname:{
   type:String
  },
  lname:{
    type:String
  },
  pass:{
    type:String
  },
  newpass:{
    type:String
  },
  phone:{
    type:String
  },
  email:{
    type:String
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
});

// generating token

const secretKey = 'my_secret_key';

const userId = 'user_id_goes_here';

const payload = {
  userId,
};

const options = {
  expiresIn: '1h',
};

const token = jsonwebtoken.sign(payload, secretKey, options);




const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const pending= mongoose.model("pendingOrder",pendingOrder)
const confirm = mongoose.model("confirmOrder",confirmOrder)
const pendingC= mongoose.model("pendingCustomOrder",pendingCustomOrder)
const confirmCus= mongoose.model("confirmCustomOrder",confirmCustomOrder)


// Routes
app.post("/fetchPCU",(req,res)=>{
  const show=async()=>{
    res.send(await pendingC.find());
  }
  show();
})
app.post("/CuData",(req,res)=>{
  const show=async()=>{
    res.send(await confirmCus.find());
  }
  show();
})

app.post("/confirmCu",(req,res)=>{  
const {pizzaName,email,phone,id}=req.body;
console.log(req.body);
const cuOrder= new confirmCus({
  pizzaName:req.body.pizzaName,
  email:req.body.email,
  phone:req.body.phone}
)
cuOrder.save()
pendingC.deleteOne({_id:req.body.id})
.then(()=>{
res.send({message:"Item Confirmed Succesfully"})
})
})
app.post("/custom",(req,res)=>{
  const {pizzaName,email,phone}=req.body;
  const pendingc= new pendingC({
    pizzaName,
    email,
    phone}
)
  pendingc.save()
  .then(()=>{
    res.send({message:"Item Added in your cart Now go for payment"})
  })
})

app.post("/confirmO",(req,res)=>{
  const {pizzaName,email,phone,id}=req.body;
    console.log(req.body);
    const cOrder= new confirm({
      pizzaName,
      email,
      phone}
  )
    cOrder.save()
  pending.deleteOne({_id:req.body.id})
  .then(()=>{
    res.send({message:"Item Confirmed Succesfully"})
})
.catch((err)=>{
  console.log("error");
}
)}
)
app.post("/fetchC",(req,res)=>{
  const show=async()=>{
    res.send(await confirm.find());
  }
  show();
})

app.post("/submit",(req,res)=>{
  const {pizzaName,email,phone}=req.body;
  const pOrder= new pending({
    pizzaName,
    email,
    phone}
)
  pOrder.save()
  .then(()=>{
    res.send({message:"Item Added Tocart"})
  })

})
app.post("/pending",(req,res)=>{
  const show=async()=>{
    res.send(await pending.find());
  }
  show();
})

app.post("/login",(req,res)=>{
  const {email, pass } = req.body;
  User.findOne({email:email})
  .then((user)=>{
    if(user){
      if(pass===user.pass){
       
        const secretKey = "TechnicalBunnyRayaanRacer";

        const userId = user._id;

        const payload = {
          userId,
        };

        const options = {
          expiresIn: '5s',
        };

        const token = jsonwebtoken.sign(payload, secretKey, options);
        // token={token:token}
        // console.log(token);
        res.send({message:"Login Success",user:user,token:token})

      }
      else{
        res.send({message:"Password didn't match"})
      }
    }
    else{
      res.send({message:"User is Not Registered"});
    }
  })

})

app.post("/alogin",(req,res)=>{
  const {email, pass } = req.body;
  Admin.findOne({email:email})
  .then((user)=>{
    if(user){
      if(pass===user.pass){
       
      res.send({message:"Login Success",user:user,token:token})

      }
      else{
        res.send({message:"Password didn't match"})
      }
    }
    else{
      res.send({message:"User is Not Registered"});
    }
  })

})

app.post("/custom",(req,res)=>{
  console.log(req.body);
  res.send({message:"Item Added To Your Cart, Now do your Payment"})
})

app.post("/deleteU",(req,res)=>{
  const {email}=req.body;
  console.log(req.body);
  User.deleteOne({email:req.body.email})
  .then(()=>{
    res.send({message:"Deleted Succesfully"})
})
.catch((err)=>{
  console.log("error");
}
)}
)

app.post("/all",(req,res)=>{
  const show=async()=>{
    res.send(await User.find());
  }
  show();
})

app.post("/register",(req,res)=>{
  console.log(req.body)
  const {fname, lname, email, phone, pass, newpass } = req.body;
  console.log(fname);
User.findOne({email:email})
.then(user=>{
  if(user){
    res.send({message:"User is Already Registered"});
  } else{
    
    const user = new User({
      fname,
      lname,
      email,
      phone,
      pass,
      newpass
    })
    user.save()
    .then(()=>{ res.send({message:"Successfully Registered"});

    })
    .catch((err)=>{
      res.send(err)
    })
    
  }
})
 

})

app.listen(9002,()=>{
  console.log("BE Started at port 9002");
})

