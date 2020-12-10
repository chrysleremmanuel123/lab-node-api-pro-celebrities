const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://System:root@cluster0.tcvso.mongodb.net/ProCelebraties?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(ok => console.log("Connected to mongodb"))
    .catch(err => console.log("Mongodb connection error", err));

module.exports = mongoose