const express = require('express')
const bodyParsed = require('body-parser')
const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')
const path = require('path')
// const handleHbs = require('express-handlebars')

const app = express()

// app.engine('hbs',handleHbs({layoutsDir: path.join(__dirname, '/views/layouts'), defaultLayout: 'main-layout', extname:'hbs'}))
app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(bodyParsed.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.router)

app.use(shopRouter)

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not found'})
})

app.listen(3002)
