const db = require("../models");
const User = db.users;
const Address = db.adresses;

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
    res.status(200).send({
      message: "User was updated successfully.",
    });
  } catch (err) {
    res.send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).send({
      message: "User was deleted successfully!",
    });
  } catch (err) {
    res.send(err);
  }
};

exports.findAddress = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.findOne({
      where: { id: userId },
      include: {
        model: Address,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.createUserAddress = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Create a User
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const result_user = await User.create(user);
    // console.log(result_user);
    const result = [result_user];
    if (!req.body.addresses || !result_user.id) {
      res.status(400).send({
        message:
          "User created successfully. Content can not be empty!(addresses)",
      });
      return;
    }

    // Create a Address [ {"address1":""}, {"address1":""} ]
    const arr_address = req.body.addresses;
    for (let i = 0; i < arr_address.length; i++) {
      const address = {
        address1: arr_address[i].address1,
        userId: result_user.id,
      };
      const result_address = await Address.create(address);
      result.push(result_address);
    }
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
