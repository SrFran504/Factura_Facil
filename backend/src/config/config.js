const mysql = require('mysql2')

const db = mysql.createConnection({
    host:'Localhost',
    user:'root',
    password:'',
    database: 'factura_facil'
})

db.connect(function(err){
    if(err) throw err;
    console.log('base de datos conectada')
});

module.exports=db;