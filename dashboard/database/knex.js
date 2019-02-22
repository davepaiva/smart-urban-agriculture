const knex = require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        user:'dave',
        password:'6972',
        database:'dashboard'
    }
});
module.exports = knex;