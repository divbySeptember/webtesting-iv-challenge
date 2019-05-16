const db = require("../data/dbConfig.js");

module.exports = {
  findBy,
  findById,
  insert
};

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function insert(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}
