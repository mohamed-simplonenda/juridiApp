const express=require ('express')
const router =express.Router()
const contact = require('./controller')
router.get('/getContact',contact.getContact)
router.post('/addContact',contact.addContact)
router.put('/updateContact/:id/',contact.updateContact)
router.delete('/deleteContact/:id/',contact.deleteContact)
module.exports=router