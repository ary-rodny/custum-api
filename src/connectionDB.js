import mysql from 'mysql2'
import './config.js'
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config.js'


const conn = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASS,
    port:DB_PORT,
    database:DB_NAME
})

conn.connect((err) => {
    if(err) throw err;
})


export default conn