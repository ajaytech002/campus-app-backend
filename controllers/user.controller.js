const userServices = require("../services/user.services");
const joi = require("joi");

const getAllUsers = async (req, res) => {
  //  validations
  try {
    const users = await userServices.getAllUsers();
    return { data: users };
  } catch (err) {
    console.log(err);
    return { data: null, msg: "error" };
  }
};

const getUser = async (req, res) => {
  // validations

  try {
    const data = await userServices.getUser({ id: req.params.id });
    if (data.msg != "error") {
      return { user: data.user, msg: "ok" };
    } else {
      return { user: null, msg: "error" };
    }
  } catch (err) {
    console.log(err);
    return { user: null, msg: "error" };
  }
};
module.exports = { getAllUsers, getUser };
