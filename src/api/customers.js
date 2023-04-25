import { Router } from "express";
// import conn from "../connectionDB.js";
import conn from "../postgresConn.js";
// import pgp from 'pg-promise'
// const db = pgp('postgres://root:4TyluRtx5gVVufaQkxpL3ysR7o5fOD1t@dpg-ch3vgcr3cv21aocggqi0-a/sampledb_nwen')

const router = Router();

// router.route("/customers/*").get((req, res, next) => {
//     retu
// })


// get all customers
router.get("/customers", (req, res) => {
    conn.query("SELECT * FROM customers", (err, results, field) => {
        if(err){
            res.json(err.message)
        }
        else{
            res.json(results.rows)
        }
    })    
})


// get a single customer
router.get("/customers/:id", (req, res) => {
    const id = req.params.id
    conn.query(`SELECT * FROM customers WHERE id=${id} `, (err, results, field) => {
        if(err){
            res.json(err.message)
        }
        else{
            res.json(results.rows)
        }
    })    
})

router.post("/customers", (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const address = req.body.address
    const phone = req.body.phone

    const sql = `INSERT INTO customers (name,email,address,phone) VALUES('${name}', '${email}', '${address}', '${phone}')`
    conn.query(sql, (err, results, field) => {
        if(err){
            res.json(err.message)
        }
        else{
            res.json(results)
        }
    })    
})


export default router