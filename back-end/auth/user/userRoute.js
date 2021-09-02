const express =require('express')
const router = express.Router()
const  user = require('./userController')

 


router.get('/getUser',user.getUser)
router.delete('/:id/deleteUser',user.deleteUser)
router.put('/:id/updateUser',user.updateUser)
router.post('/register',user.register)
router.post('/signin',user.signIn)
  
module.exports = router