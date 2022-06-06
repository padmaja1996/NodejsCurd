const express = require ('express')
 const mongoose= require ('mongoose')
 const morgan =  require ('morgan')
 const bodyParser =  require ('body-parser') 

const EmployeeRoute= require ('./routes/employee')
const AdminRoute= require ('./routes/admin')




  mongoose.connect ('mongodb://localhost:27017/testdb',{useNewUrlParser: true , useUnifiedTopology: true})
  const db = mongoose.connection 
  db.on ( 'error' , (err) => { 
      console.log (err) 
    })
       db.once ( 'open' ,() => { 
           console.log (' Database Connection Established !')
       }) 
       const app=express()

       app.use (morgan( 'dev'))
       
  app.use ( bodyParser.urlencoded ( { extended : true } ))
  app.use( bodyParser.json())
  const PORT=process.env.PORT || 3000

  app.listen(PORT,() =>{
      console.log (`server is running on port ${PORT}`)
  })
  



  employee.aggregate([
    {
      $lookup: {
        from: "admin",
        localField: "employeeID",
        foreignField: "adminID",
        as: "designation",
      },
    },
    // Deconstructs the array field from the
    // input document to output a document
    // for each element
    {
      $unwind: "$designation",
    },
  ])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });






    
  app.use('/api/employee',EmployeeRoute)
  app.use('/api/Admin',AdminRoute)