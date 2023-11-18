const pool = require("../db");

async function getAllEnvironmentDB() {
  const client = await pool.connect();
  const sql = "select*from environment";
  const result = (await client.query(sql)).rows;
  return result;
}

async function getAllEnvironmentByIdDB(id) {
  const client = await pool.connect();
  const sql = "select*from environment where id=$1";
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createEnvironmentDB(label, category, priority) {
  const client = await pool.connect();
  const sql =
    "insert into environment (label, category, priority) values ($1,$2,$3) returning *";
  const result = (await client.query(sql, [label, category, priority])).rows;
  return result;
}

async function updateEnvironmentByIdDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql = `update environment 
    set label=$1, category=$2, priority=$3
    where id=$4 returning*`;
  const result = (await client.query(sql, [label, category, priority, id]))
    .rows;
  return result;
}

async function deleteEnvironmentDB(id) {
  const client = await pool.connect();
  const sql = "delete from environment where id = $1 returning *";
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function patchEnvironmentDB(id, clientObj) {
  const client = await pool.connect();
  const sql = "select*from users where id=$1";
  const oldObj = (await client.query(sql, [id])).rows;
  const newObj = { ...oldObj[0], ...clientObj };

  const sqlUpdate = `update environment 
    set label = $2,category = $3, priority=$4 where id=$1 returning *`;
  const result = (
    await client.query(sqlUpdate, [
      id,
      newObj.label,
      newObj.category,
      newObj.priority,
    ])
  ).rows;
  return result;
}

module.exports = {
  getAllEnvironmentDB,
  getAllEnvironmentByIdDB,
  createEnvironmentDB,
  updateEnvironmentByIdDB,
  deleteEnvironmentDB,
  patchEnvironmentDB,
};
