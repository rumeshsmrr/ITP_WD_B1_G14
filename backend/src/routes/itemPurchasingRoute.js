const express = require("express");
const router = express.Router();

const itemPurchase = require("../models/itemPurchasing");

//add item
router.post("/addItem", async (req,res) => {
    try{
        const{
            supId,
            products:[{
              productId,
              itemName,
              itemdescription,
              quantity,
            }],
            supRegNum,
            supName,
            
        } = req.body;

        const purchaseItem = await itemPurchase.findOne({ supId,productId,});

        if(purchaseItem){
            purchaseItem.quantity += 1;
            await purchaseItem.save();
            res.status(200).json({ message : "Item Add"});
        }else{
            const newpurchaseItem = new itemPurchase({
                supId,
                products:
                  [{productId,
                  itemName,
                  itemdescription,
                  quantity,}]
                ,
                supRegNum,
                supName,

            });
            await newpurchaseItem.save();
            res.status(200).json({ message : "Item Add" });
        }
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server Errors" });
    }
});


//increase quanrity
router.post("/increasequantity", async (req,res) => {
    try{
        const { supId, productId } = req.body;
        const purchaseItem = await itemPurchase.findOne({supId, productId});
        purchaseItem.quantity += 1;
        await purchaseItem.save();
        res.status(200).json(purchaseItem);
    }catch (err){
        res.status(500).json({ message: "server error", err });
    }
});


//descrase quanrity
router.post("/descreasequantity", async (req,res) => {
    try{
        const { supId, productId } = req.body;
        const purchaseItem = await itemPurchase.findOne({supId, productId});
        purchaseItem.quantity -= 1;
        await purchaseItem.save();
        res.status(200).json(purchaseItem);
    }catch (err){
        res.status(500).json({ message: "server error", err });
    }
});

//removve item
router.delete("/delete/:purchaseItemId", async (req, res) => {
    try {
      const { purchaseItemId } = req.params;
      await itemPurchase.findByIdAndDelete(purchaseItemId);
      res.status(200).json({ message: "Item removed " });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

// Update item quantity 
router.put("/update/:purchaseItemId", async (req, res) => {
    try {
      const { purchaseItemId } = req.params;
      const { quantity } = req.body;
      const purchaseItem = await Cart.findByIdAndUpdate(
        purchaseItemId,
        { quantity },
        { new: true }
      );
      res.status(200).json({ message: "Updated", purchaseItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });


// Get cart items for a supplier
router.get("/:supId", async (req, res) => {
    try {
      // const { customerId } = req.params.customerId;
      const purchaseItems = await itemPurchase.find({ supId: req.params.supId });
      res.status(200).json({ purchaseItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

//clear all  items 
router.delete("/clear/:supId", async (req, res) => {
    try {
      await itemPurchase.deleteMany({ supId: req.params.supId });
      res.status(200).json({ message: "Your cart is cleared" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });
  
  module.exports = router;