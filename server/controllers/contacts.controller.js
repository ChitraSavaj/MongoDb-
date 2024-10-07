import mongoose from 'mongoose'
import ContactsSchema from '../models/contacts.model.js'
import express from 'express'

const Contacts = mongoose.model('Contacts', ContactsSchema)

const router = express.Router()

router.route('/').get(async (req, res) => {
    const contacts = await Contacts.find()
    res.status(200).send(contacts)
})
router.route('/:id').get(async(req, res) => {
    const contacts = await Contacts.findOne({
        _id: req.params.id
    })
    
    res.status(200).send(contacts)
})
router.route('/').post(async(req, res) => {
    const contacts = await Contacts.insertMany(req.body)
    
    res.status(200).send(contacts)
})
router.route('/:id').put( async(req, res) => {
    const contacts = await Contacts.updateMany({_id: req.params.id}, {$set: req.body})
    
    res.status(200).send(contacts)
})
router.route('/').delete(async(req, res) => {
    const contacts = await Contacts.deleteMany(req.body)
    
    res.status(200).send(contacts)
})
router.route('/:id').delete( async(req, res) => {
    const contacts = await Contacts.deleteMany({_id: req.params.id})
    
    res.status(200).send(contacts)
})

export default router
