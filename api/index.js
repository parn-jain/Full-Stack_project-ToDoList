const express = require('express')
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const JWT_KEY = require("./Secrets2");
const mongoose = require('mongoose');
const mongoose = require('mongoose')
const db_link = require("./Secrets");
const app = express()
const userRoute = express.Router();
const adminRoute = express.Router();
app.use(express.json())
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser())
const userModel = require("./userModel")
const adminModel = require("./adminModel")
const ToDoModel = require("./ToDoModel")
app.use("/",userRoute);
app.use("/admin", adminRoute);
mongoose.connect(db_link).then(
    function()
    {
        console.log("db connected");
    }
).catch(function(err)
{
    console.log("cannot connect");
    console.log(err);
})

userRoute.get('/',(req,res)=>
{
    // console.log(JSON.stringify(req))
    res.json({
        message:`yaha per shayad home page jisme login or reguster wali button ho vo rahiga,  res.send file kerke aayega`,
        }
    )
})

userRoute.post("/",async (req,res)=>{
    let obj = req.body;
    console.log("backend",obj);
    let Ndata = await userModel.create(obj);
    console.log("this is Ndata", Ndata);
    res.send("response saved to mongoDb")
})

userRoute.post("/login",async(req,res)=>
{
    let obj2 = req.body;
    let Ndata2 = await userModel.findOne({email:obj2.email})
    if(Ndata2)
    {
        if(obj2.pass == Ndata2.pass)
        {
            let uid = Ndata2['_id'];
            let token = jwt.sign({payload:uid}, JWT_KEY);
            res.cookie('UloggedIn',token, {maxAge: 900000,httpOnly:true});
            // res.redirect("http://localhost:3000/ToDo")
            return res.json(
                {
                    message2:console.log("you are logged in"),
                    message:`you are logged in `,
                    userDetails:obj2
                }
            )
        }
    }
    else{
        return res.json({
            message2:console.log("wrong credentials"),
            message:"wrong credential"
        })
    }
})

adminRoute.post("/login",async(req,res)=>
{
    let obj3 = req.body;
    let Ndata3 = await adminModel.findOne({email:obj3.email})
    if(Ndata3)
    {
        if(obj3.pass == Ndata3.pass)
        {
            let aid = Ndata3['_id'];
            let token = jwt.sign({Apayload:aid}, JWT_KEY);
            res.cookie('isLoggedin',token, {httpOnly:true});
            return res.json(
                {
                    message:`you are logged in `,
                    userDetails:obj3
                }
            )
        }
    }
})


adminRoute.route('/allUsers')
.get(protectRoute,getUsers);

function protectRoute(req,res,next)
{

    if(req.cookies.isLoggedin)
    {
        let isVerified = jwt.verify(req.cookies.isLoggedin, JWT_KEY);
        if(isVerified)
        {
            next();
        }
        else
        {
            return res.json({
                message:"user not verified"
            })
        }
    }

    else
    {
        return res.json({
            message:'operation not allowed'
        })
    }
}


async function getUsers(req,res)
{
  let users = await userModel.find()
  res.json({
    data:users
  })
}

function Alogout(req,res)
{
    
    res.cookie('isLoggedin',' ',{maxAge:1});
    res.json({
        message:"user Logged out"
    })
}

adminRoute.route('/LogOut').get(Alogout)



userRoute.route('/ToDo').post(UserLoggedIn, WriteToDo)

function UserLoggedIn(req,res,next)
{
    if(req.cookies.UloggedIn)
    {
        let isVerified = jwt.verify(req.cookies.UloggedIn , JWT_KEY)
        // let decoder = jwt.verify(token , JWT_KEY)
        req.userId = isVerified.payload
    console.log(req.userId)

        // console.log("userId", decoder.userId)
        if(isVerified)
        {
            next();
        }
        else
        {
            return res.json({
                message:"user not verified"
            })
        }
    }
    else
    {
        return res.json({

            message2:'operation not allowed',
            message:'operation not allowed'
        })
    }
}

async function WriteToDo(req,res)
{
    let obj = req.body;
    console.log("hello",obj)
    let work = await ToDoModel.create(
        {
            userId: req.userId,
            desc: req.body.desc
        });
        // const ToDoId = console.log(work._id)
        if(work)
        {
            const user = await userModel.findOneAndUpdate({_id:req.userId},
                {
                    $push:{todos:work},
                    sgg:console.log(work)
                })
                // await user.save()
        }
    res.json({
        message:"welcome"
    })
}

userRoute.route('/GetToDo').get(UserLoggedIn, GetToDo)

async function GetToDo(req,res)
{
    const list = await userModel.findById(req.userId)
    .select("-pass") 
    .populate('todos')
    .exec();

    return res.json(list)
}

userRoute.route('/mToDo').post(UserLoggedIn,MarkToDo)

async function MarkToDo(req ,res)
{
    console.log("plz give the solution", req.body)
    console.log("ewrgfhjytrttdyjkjhyedd",req.userId)
    const ToDoId = await ToDoModel.findOneAndUpdate(
        {
            _id: req.body.todo_id,
            userId: req.userId,
        },[
            {$set:{
                Done:{
                    $eq:[false,"$Done"]
                }
            }}
        ]
    )
    res.json({
        message:"welcome"
    })
}


userRoute.route('/rToDo').post(UserLoggedIn,RemoveToDo)


async function RemoveToDo(req,res)
{
    console.log("this is the userId dsgfgertbgtrbrthb", req.userId)
    console.log("this is the userId dsgfgertbgtrbrthb", req.body.todo_id)
    const todocheck = await ToDoModel.findOneAndDelete({
        _id:req.body.todo_id,
        userId:req.userId,
    })
    // todocheck.save()
    if(todocheck)
    {

        const usertodo = await userModel.findOneAndUpdate({
            _id : req.userId,
        }, {$pull: {todos:req.body.todo_id}});
        // array k remove kerne ke liye hota hay pull
    //    await usertodo.save()
    // const newUser = await usertodo.save()
    }
    
    res.json({
        message:"welcome"
    })
}






app.listen(5000);
