// import supModel from "../models/supplier.js"
const mongoose = require('mongoose')
const supModel = require('../models/supplier.js')

class SupplierController{
    static getAllSup = async (req, res) => {
        try {
            
            const allSup = await supModel.find({});
            if(allSup){
                return res.status(200).json(allSup);
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    static createSup = async (req, res) => {
        const {supRegNum, supName, supContNum, supAddr, supMail, description} = req.body;
        try {
            if(supRegNum && supName && supContNum && supAddr && supMail && description){
                const newSup = supModel({

                    supRegNum,
                    supName,
                    supContNum,
                    supAddr,
                    supMail,
                    description
                });

                const saved_Sup = await newSup.save();
                if(saved_Sup){
                    return res.status(201).json(saved_Sup);
                }
                else{
                    return res.status(400).json({message: "wrong"});
                }
            }
            else{
                return res.status(400).json({message: "all feilds are required"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    static getSingleSup = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getSingleData = await supModel.findById(id);
                return res.status(200).json(getSingleData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    static updateSup = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getUpdatedData = await supModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json(getUpdatedData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    static deleteSup = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getDeleteData = await supModel.findByIdAndDelete(id);
                return res.status(200).json(getDeleteData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }; 
}

module.exports = SupplierController;