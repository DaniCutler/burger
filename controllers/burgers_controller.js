// Node.js package
const express = require("express");

// routing
const router = express.Router();

// imports burger model
const burger = require("../models/burger.js");

// default route to display burgers
router.get("/", function(request, response) {
  burger.select(function(data) {
    response.render("index", { burgers: data });
  });
});

// route to add a new burger 
router.post("/api/burgers", function(request, response) {
  burger.insert(request.body.burgerName, function(data) {
    response.json({ id: data.insertId });
  });
});

// route to update the status of a burger 
router.put("/api/burgers/:id", function(request, response) {
  burger.update(request.body.devoured, request.params.id, function(data) {
    if (data.affectedRows === 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// exports router
module.exports = router;