const express = require("express");
const router = express.Router();
const { 
    addUser,
    getUser,
    UpdateUser,
    removerUser,
    getSpecUser,

} = require("../controller/UserController");

const { 
    addInquary,
    getInquary,
    UpdateInquary,
    removerInquary,
    getSpecInquary,

} = require("../controller/InquaryController");

//addResult
router.post("/",addUser);
//getResult
router.get("/all",getUser);
//UpdateResult
router.put("/:id",UpdateUser);
//DeleteResult
router.delete("/:id",removerUser);
//getSpec
router.get("/:id",getSpecUser);

//addResult
router.post("/inq/",addInquary);
//getResult
router.get("/inq/all",getInquary);
//UpdateResult
router.put("/inq/:id",UpdateInquary);
//DeleteResult
router.delete("/inq/:id",removerInquary);
//getSpec
router.get("/inq/:id",getSpecInquary);


module.exports = router;