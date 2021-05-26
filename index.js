const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/styles"))

const dirname = __dirname
app.get('/', (req, res)=>{
    res.sendFile(dirname  + "/public/pages/index.html")
})


app.get('/home', (req, res)=>{
    res.sendFile(dirname  + "/public/pages/home.html")
})

app.get('/login', (req , res) =>{
    res.sendFile(dirname + '/public/pages/login.html')
})

app.listen(3000)
console.log('servidor rodando')