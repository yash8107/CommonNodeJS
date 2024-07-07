const express = require("express")
const app = express()

app.get('/', (req, res)=>{
    res.send('hello');
    return "hi backend!!"
})

// app.get('/singin', (req,res)=>{
//     res.render("signin.ejs")
// })

// app.get('/register', (req, res)=>{
//     res.render('register.ejs')
// })

app.listen(3000);