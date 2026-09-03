const sql = require('mysql2');

const pool = sql.createPool({
    host: 'localhost',
    user: 'aluno',
    password: 'ifsp',
    database: 'sistema_auth'
});

module.exports=pool.promise();