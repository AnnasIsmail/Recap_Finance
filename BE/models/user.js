const mongoose = require('mongoose');

const users = mongoose.model('User',{
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Email:{
        type: String,
    },
    Username:{
        type: String,
    },
    Password:{
        type: String,
    },
    lastOnline:{
        type: String,
    },
    createdAt:{
        type: String,
    },
    updatedAt:{
        type: String,
    }
})

module.exports = users 