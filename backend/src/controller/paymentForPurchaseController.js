// const mongoose = require('mongoose')

// const payPurchaseMode = require('../models/paymentForPurchasing')

// class PaymentForItemPurchaseController{

//     static getAllPurchase = async (req,res) => {
//         try{
//             const allPurchase = await payPurchaseMode.find({});
//             if(allPurchase){
//                 return res.status(200).json(allPurchase);
//             }
//         }catch (error){
//             return res.status(400).json(error);
//         }
//     };

//     static createPurchase = async (req,res) => {

//         const {supRegNum, supName, orderDate, orderReciveDate, purchaseItem :[itemName,unitPrice,quantity,amount], allAmount, delayDate, delypresantage, finalAmount} = req.body;
        
//         try{
//             if(supRegNum && supName && orderDate && orderReciveDate && purchaseItem && itemName && unitPrice && quantity && amount && allAmount && delayDate && delypresantage && finalAmount){
//                 const newPurchase = payPurchaseMode({
//                     supRegNum, 
//                     supName, 
//                     orderDate, 
//                     orderReciveDate, 
//                     purchaseItem :[itemName,
//                         unitPrice,
//                         quantity,
//                         amount], 
//                     allAmount, 
//                     delayDate, 
//                     delypresantage, 
//                     finalAmount
//                 });

//                 const saved_purchase = await newPurchase.save();
//                 if(saved_purchase){
//                     return res.status(201).json(saved_purchase);
//                 }
//                 else{
//                     return res.status(400).json({message: "wrong"});
//                 }
//             }else{
//                 return res.status(400).json({message: "all feilds are required"});
//             }
//         } catch (error) {
//             return res.status(400).json(error);
//         }
//     };

// }


// module.exports = PaymentForItemPurchaseController;




const mongoose = require('mongoose');

const PaymentForPurchase = require('../models/paymentForPurchasing');

class PaymentForItemPurchaseController {
  static async getAllPurchases(req, res) {
    try {
      const allPurchases = await PaymentForPurchase.find({});
      return res.status(200).json(allPurchases);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async createPurchase(req, res) {
    const {
      supRegNum,
      supName,
      orderDate,
      orderReceiveDate,
      purchaseItem,
      allAmount,
      delayDate,
      delayPercentage,
      finalAmount,
    } = req.body;

    if (!supRegNum || !supName || !orderDate || !orderReceiveDate || !purchaseItem || !allAmount || !delayDate || !delayPercentage || !finalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [itemName, unitPrice, quantity, amount] = purchaseItem;

    try {
      const newPurchase = new PaymentForPurchase({
        supRegNum,
        supName,
        orderDate,
        orderReceiveDate,
        purchaseItem: {itemName, unitPrice, quantity, amount},
        allAmount,
        delayDate,
        delayPercentage,
        finalAmount,
      });

      const savedPurchase = await newPurchase.save();
      return res.status(201).json(savedPurchase);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = PaymentForItemPurchaseController;
