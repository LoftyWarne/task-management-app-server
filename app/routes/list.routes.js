module.exports = app => {
    const list = require("../controllers/list.controller.js");
  
    let router = require("express").Router();
  
    // Retrieve all lists
    router.get("/", list.findAll);

    // Create a new list
    router.post("/add", list.create);
  
    // Rename a list with id
    router.put("/update/:id", list.update);

    // Delete a list with id
    router.delete("/delete/:id", list.delete);
  
    app.use('/api/list', router);
  };