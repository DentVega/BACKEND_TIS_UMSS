const { Pool } = require('pg');

const pool = new Pool({
    host: 'bzv6zciyjbbxnovb9tgx-postgresql.services.clever-cloud.com',
    user: 'urjthqzsg7tlka1dw0dy',
    password: 'CiWwlRLtDds6hLiYfn45',
    database: 'bzv6zciyjbbxnovb9tgx',
    port: '5432'
});

module.exports = pool;