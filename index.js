const express = require('express')
const port= process.env.PORT|| 8080
const app= express()
const contactList = require('./ContactList/ContactRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//contact
app.use('/contactList',contactList)

app.get('*', (req,res)=> {
    res.send('<h1> Add a valid link</h1>')
})
app.listen(port,(req,res)=> {
    console.log('localhost',port)
})