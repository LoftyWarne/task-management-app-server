const db = require("../models");
const list = db.list;
const Op = db.Sequelize.Op;

// Retrieve all lists from the database.
exports.findAll = (req, res) => {

  list.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lists."
      });
    });
};

//Create and save a new list
exports.create = (req, res) => {
    console.log(req.body.tbl_ListName)
    // Validate request
    if (!req.body.tbl_ListName) {
      res.status(400).send({
        message: "Content cannot be empty!"
      });
      return;
    }
  
    // Create a list
    const listObj = {
      tbl_ListName: req.body.tbl_ListName,
    };
  
    // Save list in the database
    list.create(listObj)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the list."
        });
      });
  };

  //Update a list by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    list.update(req.body, {
      where: { tbl_PK_List: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update list with tbl_PK_List=${id}. Maybe list was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating list with tbl_PK_List=" + id
        });
      });
  };  

//Delete a list with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;
  
    list.destroy({
      where: { tbl_PK_List: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete list with id=${id}. Maybe list was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete list with id=" + id
        });
      });
  };