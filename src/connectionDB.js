import mysql from 'mysql2'
import './config.js'
// import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config.js'


const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Excelencia-07",
    port:3306,
    database:'nodecrud'
})

conn.connect((err) => {
    if(err) throw err;
})


export default conn