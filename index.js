const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public/styles"))


app.get('/', (req, res)=>{
    res.sendFile(__dirname  + "/public/pages/index.html")
})


app.get('/home', (req, res)=>{
    res.sendFile(__dirname  + "/public/pages/home.html")
})


app.listen(3000)
console.log('servidor rodando')