const { Pool } = require('pg')

const pool = new Pool({
    password: "28092002*",
    database: "skills",
    port: 5432,
    host: "localhost",
    user: 'postgres'
})

module.exports = pool;