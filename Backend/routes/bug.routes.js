const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {authentication} = require("../middlewares/authentication")

const {BugModel} = require("../models/Bug.model")

const bugController = Router();

bugController.get("/getbug", async (req, res) => {

     const data = await BugModel.find()
   
      res.send(data);
   
})

bugController.post("/postbug", async (req, res) => {
    try {
        const bug = new BugModel(req.body);
        await bug.save()
        res.status(200).send({"msg":"Bug created successfully"})
    }
    catch (err) {
        res.status(503).send("Something went wrong")
    }
    
    
})




module.exports = {
    bugController
}