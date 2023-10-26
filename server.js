const express = require('express')
const mongoose = require('mongoose')
const app = express()


// routes

app.get('/', (req, res) => {
    res.send('Hello node api')
})

app.get('/blog', (req, res) => {
    res.send('blog')
})


mongoose.
connect('mongodb+srv://admin:123456admin@devtaminapi.zpncstm.mongodb.net/new-form-task?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });    
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
    
})