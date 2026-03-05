/** BACKEND DA OCCASION IGREJA */
const mongoose = require("mongoose");

//EVENTOS DA IGREJA
const occasionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    start: {type: Date, required: true},
    end: {type: Date, required: true},

});

module.exports = mongoose.model("Occasion", occasionSchema);