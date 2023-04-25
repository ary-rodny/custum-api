import { Router } from "express";
import conn from "../connectionDB.js";

const router = Router();

// router.route("/customers/*").get((req, res, next) => {
//     retu
// })


// get all customers
router.get("/customers", (req, res) => {
    conn.query("SELECT * FROM customers", (err, results, field) => {
        if(err){
            res.json(err.code)
        }
        else{
            res.json(results)
        }
    })    
})


// get a single customer
router.get("/customers/:id", (req, res) => {
    const id = req.params.id
    conn.query("SELECT * FROM customers WHERE id = ?", [id], (err, results, field) => {
        if(err){
            res.json(err.message)
        }
        else{
            res.json(results)
        }
    })    
})


export default router