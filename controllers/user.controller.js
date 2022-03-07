const userServices = require("../services/user.services");
const joi = require("joi");

const getAllUsers = async (req, res) => {
  //  validations

  const data = await userServices.getAllUsers();
  return data;
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
