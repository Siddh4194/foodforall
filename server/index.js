////////// packages -----------------------------------------------
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const env = require('dotenv').config();
const cors = require('cors');
const path = require('path');
// creadentials pakcages imported

// var Contactapp = require('./routes/ContactAPI');
// mongoose connection is checked first
// App setup
const app = express();
app.use(
  express.urlencoded({ extended: true })
  );
  
  app.use(express.json());//we can assign the limits
  app.use(bodyparser.urlencoded({extended:true}));
  // Serve static files from the React build directory
  app.use(express.static(path.join(__dirname, 'FrontEnd/build')));
  // set up the cors for the ss events
  app.use(cors(
    {
  origin:['http://localhost:3000','http://localhost:3001'],
  methods:['GET', 'POST','PUT','DELETE'],
  credentials:true
}
));
// app.use(cors({
//   origin:['http://localhost:3000'],
//   methods:['GET', 'POST','PUT','DELETE'],
//   credentials:true
// }));

// Save the contact forms



//? Making Creadentials

  var pass = 'mongodb://127.0.0.1:27017/foodForAll';
  mongoose.connect(pass,{
    useNewUrlParser:true
  })

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('Connected to MongoDB');
  });

  // !-------------------------------------------
  // ! user schema to store the all types of user
  // !-------------------------------------------
  const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    citypincode:String,
    rphone:String,
    address:String,
    panel:String,
  })

  const User = new mongoose.model("User",userSchema);


  // ? -------------------------------------------
  // ? ----------------Log In --------------------
  // ? -------------------------------------------
  app.post('/login', async function(req, res) {
    try {
      const data = await User.findOne({ username: req.body.email, password: req.body.password, panel:req.body.panel}).exec();
      console.log(data);
      if (data) {
        res.send({ status: true, data: data, message: "Login successful" });
      } else {
        res.send({ status: false, data: false, message: "Invalid email or password" });
      }
    } catch (err) {
      console.log(err);
      res.send({ status: false, message: err.message });
    }
  });
  

  // ? -------------------------------------------
  // ? -----------------Secret--------------------
  // ? -------------------------------------------
  app.get('/secret',function(req, res){
    if(req.isAuthenticated()){
        res.send({status:true,user:req.user});
    } else{
        res.send({status:false});
    }
  });

  app.post('/register', function(req,res){
    console.log(req.body);
    const user = new User(
      {
        username:req.body.remail,
        name:req.body.rname,
        citypincode:req.body.citypincode,
        rphone:req.body.rphone,
        address:req.body.raddr,
        panel:req.body.panel,
        password:req.body.rpassword
      })
      user.save();
      res.send({data:true})
  })

  
  const FoodSchema = new mongoose.Schema({
    fpname: String,
    fpprice: String,
    fpqty: String,
    companyID: String,
  })

  const FoodProduct= new mongoose.model("FoodProduct",FoodSchema);

  app.post('/postFoodproduct', function(req,res){
    console.log(req.body);
    const user = new FoodProduct(req.body)
      user.save();
      res.send({data:true})
  })

  app.post('/getFoodproductByCompany', function(req,res){
    try{
      
    console.log(req.body);
    const data =  FoodProduct.find({companyID:req.body.companyID}).exec();
      res.send({data:data})
    }
    catch(err){console.log(err);}
  })

  
  const NGOrequestSchema = new mongoose.Schema({
    ngoName: String,
    ngoAddress: String,
    ngoID:String,
    headCount:Number,
    donorName:String,
    donorId:String
  })

  const NGORequest= new mongoose.model("ngorequest",NGOrequestSchema);
  app.post('/sendRequest', function(req,res){
    const {user,headCount} = req.body;
    try{
      let request = new NGORequest({
        ngoName:user.data.name,
        ngoAddress:user.data.address,
        ngoID:user.data._id,
        headCount:headCount
      })
      request.save();
    }
    catch(err){console.log(err);}
  })

  app.post('/getDonor', async function(req,res){
    const {donorID} = req.body;
    try{
      const donor = await User.findOne({_id:donorID.split('}')[0]}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })


  app.get('/getAllCustomer', async function(req,res){
    const {donorID} = req.body;
    try{
      const donor = await User.find({panel:'CustomerLogin'}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })

  app.delete('/deleteCustomer/:id', async function(req,res){
    const {donorID} = req.body;
    try{
      const donor = await User.findOneAndDelete({_id:req.params.id}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })

  app.get('/getAllDonor', async function(req,res){
    const {donorID} = req.body;
    try{
      const donor = await User.find({panel:'DonorSignInForm'}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })

  app.delete('/deleteDonor/:id', async function(req,res){
    console.log(req.params.id);
    try{
      const donor = await User.findOneAndDelete({_id:req.params.id}).exec();
      console.log("hotel deletion status:",donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })

  app.get('/getAllNgo', async function(req,res){
    try{
      const donor = await User.find({panel:'NGOlogin'}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })

  app.delete('/deleteNgo/:id', async function(req,res){
    try{
      const donor = await User.deleteOne({_id:req.params.id}).exec();
      console.log(donor);
      res.send({donor:donor,status:true});
    }
    catch(err){
      console.log(err);
    }
  })
  
  app.post('/checkAdminLogin', async function(req,res){
    const {email,password} = req.body;
    console.log(req.body);
    try{
      const donor = await User.findOne({username:email}).exec();
      console.log(donor);
      if(donor.password == password){
        console.log("loggedin");
        res.send({status:true,donor:donor});
      }
    }
    catch(err){
      console.log(err);
    }
  })

  const getRequests = async (req, res) => {
    try {
        const ngoID = req.body._id;

        // Validate ngoID
        if (!mongoose.Types.ObjectId.isValid(ngoID)) {
            return res.status(400).json({ message: 'Invalid NGO ID' });
        }

        // Find requests
        const requests = await NGORequest.find({ ngoID: ngoID }).exec();

        // Check if any requests found
        if (!requests) {
            return res.status(404).json({ message: 'No requests found' });
        }

        // Return the requests
        return res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching requests:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

app.post('/getRequestByNgo', getRequests);



const deleteRequests = async (req, res) => {
  try {
      const {reqid} = req.body;

      console.log(req.body

      );
      // Validate ngoID
      if (!mongoose.Types.ObjectId.isValid(reqid)) {
          return res.status(400).json({ message: 'Invalid NGO ID' });
      }

      // // Find requests
      const result = await NGORequest.deleteOne({ _id: reqid });
      if (result.deletedCount === 0) {
        console.log(result);
          return res.status(404).json({ message: 'Request not found' });
      }


      // // // Check if any requests found
      // if (!requests) {
      //     return res.status(404).json({ message: 'No requests found' });
      // }

      // // Return the requests
      // return res.status(200).json(requests);
  } catch (error) {
      console.error('Error fetching requests:', error);
      return res.status(500).json({ message: 'Server error' });
  }
};
app.post('/deleteRequestByNgo', deleteRequests);



const getAllRequests = async (req, res) => {
  try {
      // Validate ngoID
      // if (!mongoose.Types.ObjectId.isValid(ngoID)) {
      //     return res.status(400).json({ message: 'Invalid NGO ID' });
      // }

      // Find requests
      const requests = await NGORequest.find({}).exec();

      // Check if any requests found
      if (!requests) {
        console.log("No request Found");
          return res.status(404).json({ message: 'No requests found' });
      }

      // Return the requests
      return res.status(200).json({data:requests});
  } catch (error) {
      console.error('Error fetching requests:', error);
      return res.status(500).json({ message: 'Server error' });
  }
};

app.get('/getAllRequest', getAllRequests);


const updateRequests = async (req, res) => {
  // try {
      // Validate ngoID
      // if (!mongoose.Types.ObjectId.isValid(ngoID)) {
      //     return res.status(400).json({ message: 'Invalid NGO ID' });
      // }
      const {user,ngoID,reqid} = req.body;
      // Find requests
      const requests = await NGORequest.findOneAndUpdate(
        {
          _id: reqid,
        },
        {
          $set:{
            donorName:user.data.name,
            donorId:user.data._id
          }
        }
        ,
        {
          new:true
        }
      ).exec();

      console.log(requests);
  //     // Check if any requests found
  //     if (!requests) {
  //       console.log("No request Found");
  //         return res.status(404).json({ message: 'No requests found' });
  //     }

  //     // Return the requests
  //     return res.status(200).json({data:requests});
  // } catch (error) {
  //     console.error('Error fetching requests:', error);
  //     return res.status(500).json({ message: 'Server error' });
  // }
};

app.put('/updateRequest', updateRequests);





  app.get("/",function(req,res){
    res.send("You are rocking!!!!!!!!!!!!!!!!!!!!!")
  })


app.listen(process.env.PORT || 500 , function() {
    console.log("Server started on port 500");
});