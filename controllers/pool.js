const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'juan1999',
    database: 'TIS',
    port: '5432'
});

module.exports = pool;