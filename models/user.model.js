const mongoose = require('mongoose');

var userSchema = new mongoose.userSchema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    saltSecret: String
});

mongoose.model('User', userSchema);