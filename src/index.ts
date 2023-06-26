import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import { connectToMongoDB } from './config/db'
import { cepsRouter } from './routes/ceps'


connectToMongoDB()


const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/contacts', cepsRouter)


app.get('/', (req, res) => res.send('CEP API'))


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on ${port}`))


export default app


