const jwt = require("jsonwebtoken");
// const {SECRET_KEY} = require("../helpers/constant")
// const values = require("lodash/values");
require('dotenv').config();

const createJwtToken = (userid) => {
  const jwtPayload = {
    user: {
      id: userid,
    },
  };

  return jwt.sign(jwtPayload, process.env.SECRETKEY, { expiresIn: "1h" });
};

module.exports = {createJwtToken};