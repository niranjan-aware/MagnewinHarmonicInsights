const express=require('express')
const http=require('http')

//Database
require('./DB/db')

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const PORT=process.env.PORT || process.env.API_PORT

const app=express()
app.use(express.json())

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const authRoutes=require('./Routes/authRoutes')
app.use('/api/auth',authRoutes)

const dataRoutes=require('./Routes/CalculationDataRoutes')
app.use('/api/data',dataRoutes)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})