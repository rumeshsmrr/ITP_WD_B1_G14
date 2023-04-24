const express = require("express");
const router = express.Router();
const { 
    addDelivery,
    getDelivery,
    UpdateDelivery,
    removerDelivery,
    getSpecDelivery,

} = require("../controller/DeliveryController");

//addResult
router.post("/",addDelivery);
//getResult
router.get("/all",getDelivery);
//UpdateResult
router.put("/:id",UpdateDelivery);
//DeleteResult
router.delete("/:id",removerDelivery);
//getSpec
router.get("/:id",getSpecDelivery);


module.exports = router;