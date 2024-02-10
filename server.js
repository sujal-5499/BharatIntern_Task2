const express= require('express')
const articleRouter= require("./routes/articles")
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Article=require('./models/article')
const app= express()

mongoose.connect('mongodb+srv://princesingh12092001:qezhB8LZK5VTX0h9@cluster0.fqxhdi1.mongodb.net/?retryWrites=true&w=majority')

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/',async(req,res)=>{
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index',{articles:articles})
})
app.use('/articles',articleRouter)
app.listen(3000) 