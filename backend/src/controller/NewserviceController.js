const NewServiceModel = require("../model/NewserviceModel");


const addnewService = (req, res) => {

    const {new_service_id,new_service_category,new_service_description,new_price_title,new_price} = req.body;

    const addnewService = new NewServiceModel({
        new_service_id,
        new_service_category,
        new_service_description,
        new_price_title,
        new_price
      
    });

//addResult
    addnewService.save().then((makenewservice)=>{
        res.json(makenewservice);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getnewService = async (req, res) => {
  
    try{
      const cors = await NewServiceModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdatenewService = async (req, res) => {
    const newServiceID = req.params.id;
  
    try {
      const cRs = await NewServiceModel.findById(newServiceID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {new_service_id,new_service_category,new_service_description,new_price_title,new_price} = req.body;
      
      const cor = await NewServiceModel.findByIdAndUpdate(newServiceID, {new_service_id,new_service_category,new_service_description,new_price_title,new_price});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removernewService = async (req,res) => {
    const newServiceID = req.params.id;
  
    try{
      const crs = await NewServiceModel.findById(newServiceID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removernewService = await NewServiceModel.findByIdAndDelete(newServiceID);
      res.status(200).json(removernewService)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecnew = async (req,res) => {

    let newServiceID = req.params.id;
    const service = await  NewServiceModel.findById(newServiceID)
        .then((service) => {

            res.status(200).send({status: "search success",service})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addnewService,
    getnewService,
    UpdatenewService,
    removernewService,
    getSpecnew,
    
  }