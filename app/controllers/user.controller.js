const db = require("../models");
const User = db.users;

// Create and Save a new Tutorial
exports.findAll = async (req, res) => {
  try {
    const result = await User.findAll();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.create = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const result = await User.create(user);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.update = async (req, res) => {
  try {
    // validation
    if (!req.body.name || !req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const result = await User.update(user, {
      where: { id: req.params.id },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
