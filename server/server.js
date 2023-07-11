//import
let express=require('express');
let mongoose=require('mongoose');
let bcryptjs=require('bcryptjs');
let jsonwebtoken=require('jsonwebtoken');
let cookieParser=require('cookie-parser');
//App
let app=express();
let jsonKey='ajfaliwjfalalc[av[svawjrhqoriq[141411!qfnafka[smfafm,';
// middleware
app.use(express.json());
app.use(cookieParser())
// app.use(cors(
//     {
//         origin:[""],
//         methods:["",""],
//         credentials:"true"
//     }
// ))
//mongoose
mongoose.connect('mongodb://localhost:27017/BlogMERN');
//schemas
let userSchema=new mongoose.Schema({
    email:{
        type:String, 
        required:true,
        unique:true,
    },
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    },
    bio:{
        type:String,
    },
    img:{
        type:String,
    },
    tokens:{
        type:String
    },
},
{timestamps:true});
userSchema.methods.generateAuthToken=async function () {
    let token=await jsonwebtoken.sign({_id:this._id},jsonKey)
    this.tokens=token;
    return token;
}

let BlogSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    img1:{
        type:String,
    },
    img2:{
        type:String,
    },
    motive:{
        type:String,
    },
    title:{
        type:String,
        unique:true
    },
    desc:{
        type:String,
    },
    quote:{
        type:String,
    },
    view:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:Array,
        default:[]
    },
    categories:{
        type:Array,
        default:[]
    },
},
{timestamps:true});

let contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
},
    { timestamps: true }
)

//models
let userModel=new mongoose.model('user',userSchema);
let BlogModel=new mongoose.model('blog',BlogSchema);
let contactUsModel=new mongoose.model('contact',contactUsSchema);

//Auth
let Auth=async(req,res,next)=>{
    let headerToken;
    let headerToken2;
    try {
        // console.log('headerToken');
        // console.log(req.headers.token);
        // console.log(req.cookies.user);
        // console.log(req.cookie.user);
// req.coo
        // headerToken=req.cookies.user||req.headers.token;
        headerToken=req.cookies.user;
        // headerToken2=req.headers.token;
        // console.log(headerToken);
        // ||headerToken2
        jsonwebtoken.verify(headerToken,jsonKey,(err,user)=>{
            if(err)
            { 
                return res.status(403).send('Not authenticated')   
            }
            req.user=user;
            // console.log('suces');
            next();
        })
        // let val=await
    } catch (error) {
     res.status(404).send('error')   
    }
}

app.get('/secret',Auth,async(req,res)=>{
    try {
        res.send('secret hn bro')
    } catch (error) {
        
        res.send('error in secret bro')
    }
})
//Apis
//signup and login
//post
app.post('/signupp',async(req,res)=>{
    try {
    //    console.log('signup'); 
       let val =await userModel(req.body);
       if(req.body.password===req.body.cpassword)
        {
            let e =await bcryptjs.hash(req.body.password,10);
            val.password=e;
            val.cpassword='';
            await val.generateAuthToken();
            // console.log('signup'); 
            val.save();
            res.status(200).send(val);
        }
        else
        {
            res.status(403).send('password and confirm password are not matching!');
        }
        } catch (error) {   
           res.status(404).send(error);
        }
        })
app.post('/loginn',async(req,res)=>{
    try {
        let val =await userModel.findOne({email:req.body.email});
        let e = bcryptjs.compare(req.body.password,val.password);
        if(e)
        {
            let token=await val.generateAuthToken();
            res.cookie('user',token);
            res.status(200).send(val);
        }
        else
        {
            res.status(403).send('wrong login details!');
        }
        } catch (error) {   
           res.status(404).send(error);
        }
        })
//user
//get
// app.get('/users', async (req, res) => {
//     let val = await userModel.find().limit(10).sort({_id:1});
//     try {
//         res.status(200).send(val);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// })
app.get('/user/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    try {
        // console.log('/user/:id');
        // console.log(req.user._id);
        // console.log(req.params.id);
        if(req.user._id===req.params.id){
            let val = await userModel.findOne({_id:req.user._id});
            // await userModel.updateOne({$inc:{view:1}});
            // console.log('finded'); 
            // console.log(val);
            res.status(200).send(val);
        }
        else{
            res.status(403).send('Not authenticated');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/users/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    try {
        // console.log('/user/:id');
        // console.log(req.user._id);
        // console.log(req.params.id);
        // if(req.user._id===req.params.id){
            let val = await userModel.findOne({_id:req.params.id});
            // await userModel.updateOne({$inc:{view:1}});
            // console.log('finded'); 
            // console.log(val);
            res.status(200).send(val);
        // }
        // else{
        //     res.status(403).send('Not authenticated');
        // }
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/userE/userE/:id',Auth, async (req, res) => {
    // console.log('//userE/:id');
    let paramsId=req.params.id;
    try {
        // console.log(req.user._id);
        // console.log(req.params.id);
        // if(req.user._id===req.params.id){
            let val = await userModel.findOne({email:req.params.id});
            // await userModel.updateOne({$inc:{view:1}});
            // console.log('finded');
            // console.log(val);
            res.status(200).send(val);
            // userE/:id
        // }
        // else{
        //     res.status(403).send('Not authenticated');
        // }
    } catch (error) {
        res.status(404).send(error);
    }
})
//delete
app.delete('/user/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    try {
        if(req.user._id===req.params.id){
            let val = await userModel.findOneAndDelete({_id:paramsId});
            res.status(200).send(val);
        }
        else{
            res.status(403).send('Not authenticated');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
//patch
app.patch('/user/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    try {
        if(req.user._id===req.params.id){
            let val = await userModel.findOneAndUpdate({_id:paramsId},req.body,{New:true});
            res.status(200).send(val);
        }
        else{
            res.status(403).send('Not authenticated');
        }
    } catch (error) {
        res.status(404).send(error);
    }
})



//blog        
//post
app.post('/blog',Auth, async (req, res) => {
    // console.log(req.body);
    let val = await BlogModel({userId:req.user._id,...req.body});
    // console.log(val);
    try {
        val.save();
        res.status(200).send('val');
    } catch (error) {
        res.status(404).send(error);
    }
})
//get
app.get('/blogs', async (req, res) => {
    let val = await BlogModel.find().sort({_id:-1}).limit(5)
    // let val = await BlogModel.find().sort({_id:-1})
    // console.log(val);
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/blogsss', async (req, res) => {
    // let val = await BlogModel.find().sort({_id:-1}).limit(10)
    let val = await BlogModel.find().sort({_id:-1})
    // console.log(val);
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/blog/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    // console.log('/blogs/:id');
    let val = await BlogModel.find({_id:req.params.id});
    try {
        // console.log('val',val);
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
    // await BlogModel.find({
    //     'userId': { $in: 
    //         mongoose.Types.ObjectId(paramsId)
    //     }
    // }, function(err, docs){
    //      console.log(docs);
    // });
})
app.get('/blogs/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    // console.log('req.params.id',req.params.id);
    // console.log('/blogs/:id');
    let val = await BlogModel.find({userId:req.params.id});
    try {
        // console.log('val',val);
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
//delete
app.delete('/blog/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    let val = await BlogModel.findOneAndDelete({_id:paramsId});
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
//patch
app.patch('/blog/:id',Auth, async (req, res) => {
    let paramsId=req.params.id;
    // console.log(('patch vro'));
    let val = await BlogModel.findOneAndUpdate({_id:paramsId},req.body,{New:true});
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})

//contactus        
//post
        app.post('/contactUs', async (req, res) => {
            let val = await contactUsModel(req.body);
            try {
                val.save();
                res.status(200).send('val');
            } catch (error) {
                res.status(404).send(error);
            }
        })
        
//queries
app.get('/search',async(req,res)=>{
    // console.log(req.query);
    // console.log(req.query.q);
    // let val =await videoModel.find({videoTitle: { $regex:params ,$options:"i" }}).limit(40)
    // let val2 =await videoModel.find({videoTitle: { $regex:params ,$options:"i" }}).limit(40)
    let val=await BlogModel.find({title:{ $regex:req.query.q,$options:"i"}}).limit(13);
    
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/trend',async(req,res)=>{
    // console.log(req.query.q);
    // let val=await BlogModel.find({$sort:{view:-1}});
    // let val =await BlogModel.find({$sort:({view:1})});
    let val =await BlogModel.find().sort({view:-1}).limit(3);
    // console.log(val);
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send('error trend');
    }
})
app.get('/recent',async(req,res)=>{
    // console.log(req.query.q);
    // let val=await BlogModel.find({$sort:({createdAt:-1})});
    let val=await BlogModel.find().sort({createdAt:-1}).limit(3);
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send('error recent');
    }
})
app.get('/relatedblogs/:motive', async (req, res) => {
    let val = await BlogModel.find({motive:req.params.motive}).limit(4).sort({_id:1});
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/blogss', async (req, res) => {
    // let val = await BlogModel.find().sort({_id:-1}).limit(10)
    let val=await BlogModel.find().skip(10).limit(10)
    // console.log(val);
    try {
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/logout', async (req, res) => {
    // let val = await BlogModel.find().sort({_id:-1}).limit(10)
    // console.log(val);
    try {
        // console.log('logging out...');
        res.clearCookie('user')
        res.status(200).send();
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/random',async(req,res)=>{
    try {
        
        let val =await BlogModel.aggregate({$sample:{size:2}})
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }
    })
app.patch('/user/:email/:follow/:unfollow',Auth,async(req,res)=>{
    try {
        // console.log('fawad');
            let paramsid=req.params.email;
            let bodyid=req.body.email;
            let paramsidUser=await UserModel.findOne({_id:paramsid});
            let bodyidUser=await UserModel.findOne({_id:bodyid});
            // console.log('paramsidUser',req.params.email); 
            // console.log('bodyidUser',req.body.email); 
            if(req.params.id!==req.body._id){
                if(paramsidUser.subscribedUsers.includes(req.body._id))
                {
                    await paramsidUser.updateOne({$pull:{subscribedUsers:req.body._id}});
                    await paramsidUser.updateOne({$inc:{subscribers:-1}});
                    //    await bodyidUser.updateOne({$pull:{following:req.params.id}})
                    res.status(200).send('Successfully UnFollowed!'); 
                }
                else
                {
                res.status(404).send("You are already a Unfollower"); 
            }}
            else
            {
                res.status(404).send("You can not follow or Unfollow yourself"); 
            }
            } catch (error) {
                res.status(404).send(error);
            }
        
})

app.patch('/aa/:email',Auth,async(req,res)=>{
    try {
            let paramsid=req.params.email;
            console.log(paramsid);
            let video=await BlogModel.findOne({_id:paramsid}) ; 
            console.log(video);
            let paramsidUser=await userModel.findOne({_id:video.userId});
            console.log(paramsidUser);
            if(req.params.id!==req.user._id){
                console.log(req.user._id);
                // if(!paramsidUser.subscribedUsers.includes(req.user._id))
                if(!video.subscribedUsers.includes(req.user._id))
                {
            //    await paramsidUser.updateOne({$push:{subscribedUsers:req.user._id}});
            //    await paramsidUser.updateOne({$inc:{subscribers:1}});
            //    await paramsidUser.updateOne({$inc:{view:1}});
            console.log('not included');
               await video.updateOne({$push:{subscribedUsers:req.user._id}});
            //    await video.updateOne({$inc:{subscribers:1}});
               await video.updateOne({$inc:{view:1}});
                res.status(200).send('Successfully Followed!'); 
            }
            else
            {
                res.status(402).send("You are already a follower"); 
            }}
            else
            {
                res.status(403).send("You can not follow yourself"); 
            }
            } catch (error) {
                res.status(404).send(error);
            }
        
})


//listen
let port=8000;
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})