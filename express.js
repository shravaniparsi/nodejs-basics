const express = require('express');
const app = express();
app.listen(3000);
app.get('/', (req,res)=>{
    res.send('<p>Hi express!</p><a href="/home">home</a> <a href="/about">about</a>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})
// redirect url
app.get('/about-page',(req,res)=>{
    res.redirect('/about')
})

//sending file
app.get('/home',(req,res)=>{
    res.sendFile('./express.html',{root:__dirname})
})

//404
app.use((req,res)=>{
    res.status(400).send('<p>404 error</p>')
})