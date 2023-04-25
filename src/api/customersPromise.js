import { Router } from "express";
import pgp from 'pg-promise'
const db = pgp('postgres://root:4TyluRtx5gVVufaQkxpL3ysR7o5fOD1t@dpg-ch3vgcr3cv21aocggqi0-a/sampledb_nwen')()

const router = Router();


// get all customers
router.get("/customers", async (req, res) => {
    const res = await db
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