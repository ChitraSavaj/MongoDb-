import mongoose from 'mongoose'
import express from 'express'
import UserSchema from '../models/user.model.js'

const User = mongoose.model('Users', UserSchema)

const router = express.Router()

router.route('/').get(async (req, res) => {
    const user = await User.find()
    res.status(200).send(user)
})
router.route('/:id').get(async(req, res) => {
    const users = await User.findOne({
        _id: req.params.id
    })
    
    res.status(200).send(users)
})
router.route('/').post(async(req, res) => {
    const users = await User.insertMany(req.body)
    
    res.status(200).send(users)
})
router.route('/:id').put( async(req, res) => {
    const users = await User.updateMany({_id: req.params.id}, {$set: req.body})
    
    res.status(200).send(users)
})
router.route('/').delete(async(req, res) => {
    const users = await User.deleteMany(req.body)
    
    res.status(200).send(users)
})
router.route('/:id').delete( async(req, res) => {
    const users = await User.deleteMany({_id: req.params.id})
    
    res.status(200).send(users)
})

export default router
