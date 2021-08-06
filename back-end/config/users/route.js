const express=require ('express')
const router =express.Router()
const users = require('./controller')
router.get('/getUsers',users.getUsers)
router.post('/addUsers',users.addUsers)
router.put('/:id/updateUsers',users.updateUsers)
router.delete('/:id/deleteUsers',users.deleteUsers)
module.exports=router