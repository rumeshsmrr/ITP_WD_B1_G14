const UserModel = require("../model/UserModel");


const addUser = (req, res) => {

    const {customer_name,email,nic,phone_number,password} = req.body;

    const adduser = new UserModel({
        customer_name,
        email,
        nic,
        phone_number,
        password,
    });

//addResult
    adduser.save().then((makeuser)=>{
        res.json(makeuser);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getUser = async (req, res) => {
  
    try{
      const cors = await UserModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdateUser = async (req, res) => {
    const UserID = req.params.id;
  
    try {
      const cRs = await UserModel.findById(UserID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {customer_name,email,nic,phone_number,password} = req.body;
      
      const cor = await UserModel.findByIdAndUpdate(UserID, {customer_name,email,nic,phone_number,password});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removerUser = async (req,res) => {
    const UserID = req.params.id;
  
    try{
      const crs = await UserModel.findById(UserID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removerUser = await UserModel.findByIdAndDelete(UserID);
      res.status(200).json(removerUser)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecUser = async (req,res) => {

    let UserID = req.params.id;
    const user = await  UserModel.findById(UserID)
        .then((user) => {

            res.status(200).send({status: "search success",user})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addUser,
    getUser,
    UpdateUser,
    removerUser,
    getSpecUser,
    
  }