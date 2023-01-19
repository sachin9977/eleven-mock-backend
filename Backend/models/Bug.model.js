const mongoose = require("mongoose")


const bugSchema = new mongoose.Schema({
    id : {type : Number, required : true},
    title : {type : String, required : true},
})

const BugModel = mongoose.model("bug", bugSchema)


module.exports = {
    BugModel
}