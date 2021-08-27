const mongoose = require("mongoose")

const propertySchema  = new mongoose.Schema({

    name:{
        type: String
    },

    description:{
        type: String
    },

    size:{
        type: String
    }
})

const Property = new mongoose.model("Property", propertySchema);
module.exports = Property