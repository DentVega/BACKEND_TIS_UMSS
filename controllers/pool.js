const { Pool } = require('pg');

const pool = new Pool({
    host: 'bzv6zciyjbbxnovb9tgx-postgresql.services.clever-cloud.com',
    user: 'urjthqzsg7tlka1dw0dy',
    password: 'Mz8ibq4hkvpOivMAHyJ5',
    database: 'bzv6zciyjbbxnovb9tgx',
    port: '5432'
});

module.exports = pool;