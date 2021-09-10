const express=require ('express')
const router =express.Router()
const rdv = require('./controller')
router.get('/getRdv',rdv.getRdv)
router.get('/getRdvById/:id',rdv.getRdvById)
router.post('/addRdv',rdv.addRdv)
router.put('/updateRdv/:id',rdv.updateRdv)
router.delete('/deleteRdv/:id',rdv.deleteRdv)
module.exports=router