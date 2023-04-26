const express = require("express");
const router = express.Router();
const { 
    addProduct,
    getProduct,
    UpdateProduct,
    removeProduct,
    getSpecproduct,

} = require("../controller/SellingController");



//addResult
router.post("/",addProduct);
//getResult
router.get("/all",getProduct);
//UpdateResult
router.put("/:id",UpdateProduct);
//DeleteResult
router.delete("/:id",removeProduct);
//getSpec
router.get("/:id",getSpecproduct);





module.exports = router;