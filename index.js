import express from 'express'
import { bootstrap } from './src/app.controller.js'
import { config } from "dotenv";
config()
const app = express()
const port = process.env.PORT

bootstrap(app, express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// say hello