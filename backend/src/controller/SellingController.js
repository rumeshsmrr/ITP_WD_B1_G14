const SellingModel = require("../model/SellingModel");


const addProduct = (req, res) => {

    const {product_name,product_type,product_condition,brand,price,product_img} = req.body;

    const addproduct = new SellingModel({
        product_name,
        product_type,
        product_condition,
        brand,
        price,
        product_img
       
    });

//addResult
    addproduct.save().then((makeproduct)=>{
        res.json(makeproduct);
    }).catch((err)=>{
        console.log(console.error);     
    });
};

//getallresults
const getProduct = async (req, res) => {
  
    try{
      const cors = await SellingModel.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }

//updateResult
  const UpdateProduct = async (req, res) => {
    const ProductID = req.params.id;
  
    try {
      const cRs = await SellingModel.findById(ProductID);
  
      if(!cRs){
        return res.status(404).json("There is a no ResultID");
      }
  
      const {product_name,product_type,product_condition,brand,price,product_img} = req.body;
      
      const cor = await SellingModel.findByIdAndUpdate(ProductID, {product_name,product_type,product_condition,brand,price,product_img});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

  //deleteResult
  const removeProduct = async (req,res) => {
    const ProductID = req.params.id;
  
    try{
      const crs = await SellingModel.findById(ProductID);
      if(!crs){
        return res.status(404).json("There is no Student Result to remove");
      }
  
      const removeProduct = await SellingModel.findByIdAndDelete(ProductID);
      res.status(200).json(removeProduct);
    }catch(error){
      res.status(400).json(error.message);
  
    }
  }


  //get spesific

  const getSpecproduct = async (req,res) => {

    let ProductID = req.params.id;
    const product = await  SellingModel.findById(ProductID)
        .then((product) => {

            res.status(200).send({status: "search success",product})

        }).catch(() => {

            console.log(err.message);
            res.status(500).send({status: "Error ", error: err.message});

        })

}



  module.exports ={
    addProduct,
    getProduct,
    UpdateProduct,
    removeProduct,
    getSpecproduct,
    
  }