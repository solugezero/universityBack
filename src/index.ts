import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})

