const UserModel = require("../model/Inquary");


const addInquary = (req, res) => {

    const {service_category,email,name,date,feedback} = req.body;

    const addinquary = new UserModel({
        service_category,
        email,
        name,
        date,
        feedback,
    });

//addResult
addinquary.save().then((makeinq)=>{
        res.json(makeinq);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getInquary = async (req, res) => {
  
    try{
      const cors = await UserModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdateInquary = async (req, res) => {
    const UserID = req.params.id;
  
    try {
      const cRs = await UserModel.findById(UserID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {service_category,email,name,date,feedback} = req.body;
      
      const cor = await UserModel.findByIdAndUpdate(UserID, {service_category,email,name,date,feedback});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removerInquary = async (req,res) => {
    const UserID = req.params.id;
  
    try{
      const crs = await UserModel.findById(UserID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removerInquary = await UserModel.findByIdAndDelete(UserID);
      res.status(200).json(removerInquary)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecInquary = async (req,res) => {

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
    addInquary,
    getInquary,
    UpdateInquary,
    removerInquary,
    getSpecInquary,
    
  }