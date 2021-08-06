const express=require ('express')
const router =express.Router()
const rdv = require('./controller')
router.get('/getRdv',rdv.getRdv)
router.post('/addRdv',rdv.addRdv)
router.put('/:id/updateRdv',rdv.updateRdv)
router.delete('/:id/deleteRdv',rdv.deleteRdv)
module.exports=router