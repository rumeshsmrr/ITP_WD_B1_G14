const ServiceModel = require("../model/ServiceModel");


const addService = (req, res) => {

    const {service_id,service_category,service_description,price_title,price} = req.body;

    const addservice = new ServiceModel({
        service_id,
        service_category,
        service_description,
        price_title,
        price
      
    });

//addResult
    addservice.save().then((makeservice)=>{
        res.json(makeservice);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getService = async (req, res) => {
  
    try{
      const cors = await ServiceModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdateService = async (req, res) => {
    const ServiceID = req.params.id;
  
    try {
      const cRs = await ServiceModel.findById(ServiceID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {service_id,service_category,service_description,price_title,price} = req.body;
      
      const cor = await ServiceModel.findByIdAndUpdate(ServiceID, {service_id,service_category,service_description,price_title,price});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removerService = async (req,res) => {
    const ServiceID = req.params.id;
  
    try{
      const crs = await ServiceModel.findById(ServiceID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removerService = await ServiceModel.findByIdAndDelete(ServiceID);
      res.status(200).json(removerService)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpec = async (req,res) => {

    let ServiceID = req.params.id;
    const service = await  ServiceModel.findById(ServiceID)
        .then((service) => {

            res.status(200).send({status: "search success",service})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addService,
    getService,
    UpdateService,
    removerService,
    getSpec,
    
  }