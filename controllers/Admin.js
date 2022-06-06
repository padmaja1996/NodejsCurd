const { response } = require('express')
const Admin = require('../models/Admin')

//show list
const index=(req,res,next)=>{
    Admin.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
res.json({
    message:'An error occurd'

})
    
        
})
}
//show single employe
const show=(req,res,next)=>{
    let adminID=req.body.adminID
    Admin.findById(adminID)
    .then(response=> {
        res.json({
            response
        })
    })
    .catch(error => {
res.json({
    message:'An error occurd'

})
})
}
//add new employee

const store=(req,res,next)=>{
    let Admin=new Admin({
        name:req.body.name,
        branch:req.body.branch,
        
    })
    Admin.save()
    .then(response =>{
        res.json({
            message:'admin added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//update
const update =(req,res,next)=>{
    let adminID= req.body.adminID
    let updatedData={
        name:req.body.name,
        branch:req.body.branch,
       

    }
    Admin.findByIdAndUpdate(adminID,{$set:updatedData})
    .then(() =>{
        res.json({
            message:'admin updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//delete
const destroy =(req,res,next)=>{
    let adminID= req.body.adminID
    Admin.findByIdAndRemove(adminID)
    .then(() =>{
        res.json({
            message:'admin deleteted successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })

}
module.exports={
    index, show, store, update, destroy
}