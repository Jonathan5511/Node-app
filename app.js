const express = require('express')
const bodyParsed = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const path = require('path')
const errorController = require('./controller/error')
// const handleHbs = require('express-handlebars')

const app = express()

// app.engine('hbs',handleHbs({layoutsDir: path.join(__dirname, '/views/layouts'), defaultLayout: 'main-layout', extname:'hbs'}))
app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(bodyParsed.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes)

app.use(shopRouter)

app.use(errorController.pageNotFound)

app.listen(3002)
