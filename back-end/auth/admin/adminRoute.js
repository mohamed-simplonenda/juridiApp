const router = require('express').Router()
const admin = require('./adminController')
 router.post('/admin/signin',admin.signIn)
 

module.exports = router