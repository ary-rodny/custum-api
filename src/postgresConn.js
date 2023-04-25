import Pool from 'pg'
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './config.js'
const conn = new Pool.Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT,
})

export default conn