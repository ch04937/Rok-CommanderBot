const db = require("../../data/db-config");

const getCommander = (name) => {
  return db("commander").where({ name });
};

module.exports = {
  getCommander,
};
