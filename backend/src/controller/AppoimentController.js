const NewAppoinmentModel = require("../model/AppoinmentModel");


const addnewAppo = (req, res) => {

    const {appo_id,appo_category,apppo_description,appo_date,appo_time} = req.body;

    const addnewAppo = new NewAppoinmentModel({
        appo_id,
        appo_category,
        apppo_description,
        appo_date,
        appo_time
      
    });

//addResult
    addnewAppo.save().then((makenewappo)=>{
        res.json(makenewappo);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getnewAppo = async (req, res) => {
  
    try{
      const cors = await NewAppoinmentModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdatenewAppo = async (req, res) => {
    const newAppoID = req.params.id;
  
    try {
      const cRs = await NewAppoinmentModel.findById(newAppoID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {appo_id,appo_category,apppo_description,appo_date,appo_time} = req.body;
      
      const cor = await NewAppoinmentModel.findByIdAndUpdate(newAppoID, {appo_id,appo_category,apppo_description,appo_date,appo_time});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removernewAppo = async (req,res) => {
    const newAppoID = req.params.id;
  
    try{
      const crs = await NewAppoinmentModel.findById(newAppoID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removernewAppo = await NewAppoinmentModel.findByIdAndDelete(newAppoID);
      res.status(200).json(removernewAppo)
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecappo = async (req,res) => {

    let newServiceID = req.params.id;
    const service = await  NewAppoinmentModel.findById(newServiceID)
        .then((service) => {

            res.status(200).send({status: "search success",service})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addnewAppo,
    getnewAppo,
    UpdatenewAppo,
    removernewAppo,
    getSpecappo,
    
  }