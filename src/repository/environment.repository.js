const pool = require('../db');

async function getAllEnvironmentDB() {
    const client = await pool.connect();
    const sql = 'select*from environment';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getAllEnvironmentByIdDB(id) {
    const client = await pool.connect();
    const sql = 'select*from environment where id=$1';
    const result = (await client.query(sql,[id])).rows;
    return result;
}


module.exports = { getAllEnvironmentDB,getAllEnvironmentByIdDB }