import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import UsersController from './controllers/users.controller.js'
import ContactsController from './controllers/contacts.controller.js'

const app = express()
app.get('/', (req, res) => {
    res.status(200).send({message: 'Welcome to DressStore application.'}) 
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/api/users', UsersController)
app.use('/api/contacts', ContactsController)
export default app