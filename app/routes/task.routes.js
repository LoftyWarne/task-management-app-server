module.exports = app => {
    const list = require("../controllers/list.controller.js");
  
    let router = require("express").Router();
  
    // Retrieve all tasks
    router.get("/", task.findAll);

    // Retrieve all incomplete tasks 
    router.get("/incomplete", task.findAllIncomplete);

    // Retrieve all tasks for a specific list
    router.get("/:id", task.findAllOnList);

    // Retrieve all incomplete tasks for a specific list
    router.get("/incomplete/:id", task.findAllIncompleteOnList);
  
    // Update a task with id
    router.put("/update/:id", task.update);

    // Delete a task with id
    router.delete("/delete/:id", task.delete);

    // Delete all tasks in a specific list
    router.delete("/deleteall/:id", task.delete);
  
    app.use('/api/task', router);
  };