const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://iamr0man:danit0@cluster0-51kl1.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})