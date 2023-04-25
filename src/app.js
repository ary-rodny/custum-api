import express from 'express'
import router   from './api/customers.js'
import  { fileURLToPath, pathToFileURL } from 'url'
import path from 'path'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname,"public")))

app.use(router)




app.listen(PORT, () => console.log("App running on port ", PORT))