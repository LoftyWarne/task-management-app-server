const db = require("../models");
const task = db.task;
const Op = db.Sequelize.Op;

// Retrieve all tasks from the database.
exports.findAll = (req, res) => {

  task.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all tasks."
      });
    });
};

// Retrieve all incomplete tasks from the database.
exports.findAllIncomplete = (req, res) => {

  task.findAll({ where: { tbl_TaskComplete: false } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all incomplete tasks."
      });
    });
};

// Retrieve all tasks from the database for a specific list
exports.findAllOnList = (req, res) => {
  const id = req.params.id;

  task.findAll({ where: { tbl_FK_List: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occurred while retrieving all tasks with tbl_FK_List=${id}.`
      });
    });
};

// Retrieve all incomplete tasks from the database for a specific list
exports.findAllIncompleteOnList = (req, res) => {
  const id = req.params.id;

  task.findAll({ where: { tbl_FK_List: id, tbl_TaskComplete: false } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Some error occurred while retrieving all tasks with tbl_FK_List=${id}.`
      });
    });
};

//Create and save a new task
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tbl_TaskName) {
      res.status(400).send({
        message: "Content cannot be empty!"
      });
      return;
    }
  
    // Create a task
    const taskObj = {
      tbl_TaskName: req.body.tbl_TaskName,
      tbl_TaskDescription: req.body.tbl_TaskDescription,
      tbl_TaskDeadline: req.body.tbl_TaskDeadline,
      tbl_FK_List: req.body.tbl_FK_Task,
    };
  
    // Save task in the database
    task.create(taskObj)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the task."
        });
      });
  };

  //Update a task by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    task.update(req.body, {
      where: { tbl_PK_Task: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update task with tbl_PK_Task=${id}. Maybe task was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating task with tbl_PK_Task=" + id
        });
      });
  };  

//Delete a task with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;
  
    task.destroy({
      where: { tbl_PK_Task: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "task was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete task with id=${id}. Maybe task was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete task with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    const id = req.params.id;

    task.destroy({
      where: { tbl_FK_List: id },
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} tasks were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tasks."
        });
      });
  };