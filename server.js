const express = require('express')
const app = express()

app.set("view-engine", "ejs")

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get("/apt", (req,res) => {
    res.render('apt.ejs')
})

app.get("/ist", (req,res) => {
    res.render('ist.ejs')
})

app.listen(3000)
