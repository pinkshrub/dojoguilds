const Guilds = require("./models")

module.exports = {
    // create guild
    createGuild: (req,res) => Guilds.create(req.body).then(data=>res.json(data)).catch(errs=>res.json(errs)),
    // edit guild
    editGuild: (req,res) => ,
    // one guild
    oneGuild: (req,res) => ,
    // all guilds
    allGuilds: (req,res) => ,
    // remove guild
    deleteGuild: (req,res) => ,
    // create peeps
    createNinja: (req,res) => ,
    // edit peeps
    editNinja: (req,res) => ,
    // one peeps
    oneNinja: (req,res) => ,
    // all peeps
    allNinjas: (req,res) =>  ,
    // remove peeps
    deleteNinja: (req,res) => 
}