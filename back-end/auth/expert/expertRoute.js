const express =require('express')
const router = express.Router()
const  expert = require('./expertController')



router.get('/getExpert',expert.getExpert)
router.get('/getExpertById/:id',expert.getExpertById)
router.put('/:id/updateExpert',expert.updateExpert)


router.post('/register',expert.register)
router.post('/signin',expert.signIn)
  
module.exports = router