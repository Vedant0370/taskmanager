
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

// port number 
const port = process.env.PORT || 4000


// middlewares 
app.use(cors())
app.use(bodyParser.json())

// DataBase Connection 
mongoose.connect('mongodb+srv://vedantassignment05:qQRWH1DcroS5hghh@virtubytedb.ob63aso.mongodb.net/?retryWrites=true&w=majority' , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

// for handling api routes 
const apiRouter = express.Router()

// Import here route files
const ownTask = require('./src/routes/MyOwnTask')
const myTeamTask = require('./src/routes/CreateTeamTask')
const employeeTask = require('./src/routes/Employee')
const adminRegister = require('./src/routes/AdminRegister')

// write here api path 
apiRouter.use('/mytask' , ownTask)
apiRouter.use('/myteamtask' , myTeamTask)
apiRouter.use('/employeelist' , employeeTask)
apiRouter.use('/adminregister' , adminRegister)



// handle all api with apiRouter

app.use("/api" , apiRouter)

app.listen(port , (req, res) => {
  console.log(`Server is running on localhost:${port}`)
})



