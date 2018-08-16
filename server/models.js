const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dojo_guilds_v1",{useNewUrlParser:true},(errs)=>console.log(errs?errs:"db gucci"));

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String
    }
},{timestamps: true});

const GuildSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    motto: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: [NinjaSchema]
},{timestamps:true});

const Guilds = mongoose.model("guilds", GuildSchema)

module.exports = Guilds;