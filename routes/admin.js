const express = require('express')
const router= express.Router()
const AdminController =require('../controllers/Admin')

router.get('/',AdminController.index)
router.post('/show',AdminController.show)
router.post('/store',AdminController.store)
router.post('/update',AdminController.update)
router.post('/delete',AdminController.destroy)


module.exports=router