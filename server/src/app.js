import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static("public"))
app.use(cookieParser())


import patientRoutes from './routes/patient.routes.js'

app.use('/api/auth', patientRoutes); // Integrate patient routes



export { app }