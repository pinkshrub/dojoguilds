const bp = require("body-parser");
const api = require("./controllers");


module.exports = function(app){
    app.use(bp.json());
    // create guild
    app.post("/api/guilds", api.createGuild);
    // edit guild
    app.put("/api/guilds/:id", api.editGuild);
    // one guild
    app.get("/api/guilds/:id", api.oneGuild);
    // all guilds
    app.get("/api/guilds", api.allGuilds);
    // remove guild
    app.delete("/api/guilds/:id", api.deleteGuild);
    // create peeps
    api.post("/api/ninjas", api.createNinja);
    // edit peeps
    api.put("/api/ninjas", api.editNinja);
    // one peeps
    api.get("/api/ninjas", api.oneNinja);
    // all peeps
    api.get("/api/ninjas", api.allNinjas);
    // remove peeps
    api.delete("/api/ninjas/:id", api.Ninja);
}