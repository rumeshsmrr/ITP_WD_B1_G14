// import supItemModl from "../models/supplierItem.js"
const mongoose = require("mongoose");
const supItemModl = require("../models/supplierItem");

class SupplierSupplyItemController {
  static getAllSupItems = async (req, res) => {
    try {
      const allSupItems = await supItemModl.find({});
      if (allSupItems) {
        return res.status(200).json(allSupItems);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static createSupItems = async (req, res) => {
    //required fields
    const { supRegNum, supName, itemName, itemdescription } = req.body;
    // const {supRegNum, supName, itemName, itemPrice, itemdescription} = req.body;
    try {
      if (supRegNum && supName && itemName && itemdescription) {
        const newSupItem = supItemModl({
          supRegNum,
          supName,
          itemName,
          itemdescription,
        });

        const saved_SupItems = await newSupItem.save();
        if (saved_SupItems) {
          return res.status(201).json(saved_SupItems);
        } else {
          return res.status(400).json({ message: "wrong" });
        }
      } else {
        return res.status(400).json({ message: "all feilds are required" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static getSingleSupItems = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getSingleData = await supItemModl.findById(id);
        return res.status(200).json(getSingleData);
      } else {
        return res.status(400).json({ message: "id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static updateSupItems = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getUpdatedData = await supItemModl.findByIdAndUpdate(
          id,
          req.body
        );
        return res.status(200).json(getUpdatedData);
      } else {
        return res.status(400).json({ message: "id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static deleteSupItems = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getDeleteData = await supItemModl.findByIdAndDelete(id);
        return res.status(200).json(getDeleteData);
      } else {
        return res.status(400).json({ message: "id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static getUniqueSupplierItem = async (req, res) => {
    const userID = req.params;

    try {
      const supitem = await supItemModl
        .find({ userID: userID })
        .sort({ createdAt: -1 })
        .exec();
      res.json(supitem);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };

  // static getUniqueSupplierItem = async (req,res) => {
  //     const {supRegNum} = req.params;

  //     try{
  //         const supitem = await supItemModl.find({ supRegNum: supRegNum })
  //             .sort({ createdAt: -1 })
  //             .exec();
  //         res.json(supitem);
  //     } catch (err) {
  //         return res.status(500).json({ msg: err.message});
  //     }
  // };
}

module.exports = SupplierSupplyItemController;
