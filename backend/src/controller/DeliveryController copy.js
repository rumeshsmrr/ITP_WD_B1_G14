const DeliveryModel = require("../model/DeliveryModel");


const addDelivery = (req, res) => {

    const {full_name,delivery_address,company_name,land_mark,mobile,order_no,date,status} = req.body;

    const adddelivery = new DeliveryModel({
        full_name,
        delivery_address,
        company_name,
        land_mark,
        mobile,
        order_no,
        date,
        status
    });

//addResult
    adddelivery.save().then((makedelivery)=>{
        res.json(makedelivery);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getDelivery = async (req, res) => {
  
    try{
      const cors = await DeliveryModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdateDelivery = async (req, res) => {
    const DeliveryID = req.params.id;
  
    try {
      const cRs = await DeliveryModel.findById(DeliveryID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {full_name,delivery_address,company_name,land_mark,mobile,order_no,date,status} = req.body;
      
      const cor = await DeliveryModel.findByIdAndUpdate(DeliveryID, {full_name,delivery_address,company_name,land_mark,mobile,order_no,date,status});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removerDelivery = async (req,res) => {
    const DeliveryID = req.params.id;
  
    try{
      const crs = await DeliveryModel.findById(DeliveryID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removerDelivery = await DeliveryModel.findByIdAndDelete(DeliveryID);
      res.status(200).json(removerDelivery)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecDelivery = async (req,res) => {

    let DeliveryID = req.params.id;
    const delivery = await  DeliveryModel.findById(DeliveryID)
        .then((delivery) => {

            res.status(200).send({status: "search success",delivery})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addDelivery,
    getDelivery,
    UpdateDelivery,
    removerDelivery,
    getSpecDelivery,
    
  }