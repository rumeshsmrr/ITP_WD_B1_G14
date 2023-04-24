// import express from "express";
// import SupplierController from "../controller/supplier.js";
// const router = express.Router();
const express = require('express')
const router = express.Router()
const SupplierController = require('../controller/supplierController')
const SupplierSupplyItemController = require('../controller/supplierItemController');
const PaymentForItemPurchaseController = require('../controller/paymentForPurchaseController');
//const SupplierSupplyItemController = require('../controller/supplierItemController')


//All routers are here
router.get("/sup", SupplierController.getAllSup);
router.post("/sup", SupplierController.createSup);
router.get("/sup/single/:id", SupplierController.getSingleSup);
router.put("/sup/:id", SupplierController.updateSup);
router.delete("/sup/:id", SupplierController.deleteSup);

router.get("/supitem", SupplierSupplyItemController.getAllSupItems);
router.post("/supitem", SupplierSupplyItemController.createSupItems);
router.get("/supitem/single/:id", SupplierSupplyItemController.getSingleSupItems);
router.put("/supitem/:id", SupplierSupplyItemController.updateSupItems);
router.delete("/supitem/:id", SupplierSupplyItemController.deleteSupItems);
router.get("/supitem/:userID", SupplierSupplyItemController.getUniqueSupplierItem);

router.get("/purchaseOrder", PaymentForItemPurchaseController.getAllPurchases);
router.post("/purchaseOrderPost", PaymentForItemPurchaseController.createPurchase);


// export default router;
module.exports = router