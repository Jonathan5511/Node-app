const express = require('express')
const bodyParsed = require('body-parser')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const path = require('path')

const app = express()

app.use(bodyParsed.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouter)

app.use(shopRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(3002)
