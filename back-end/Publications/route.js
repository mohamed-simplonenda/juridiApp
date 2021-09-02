const express=require ('express')
const router =express.Router()
const publication = require('./controller')
router.get('/getPublication',publication.getPublication)
router.get('/:id/getPublicationById',publication.getPublicationById)
router.post('/addPublication',publication.addPublication)
router.put('/:id/updatePublication',publication.updatePublication)
router.delete('/:id/deletePublication',publication.deletePublication)
module.exports=router