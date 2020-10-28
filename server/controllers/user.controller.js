const mongoose = require('mongoose');

const User = mongoose.model('User');

// postman: request settings: POST, localhost:3000/api/register, Body > inputs

// function that handles user requests. Salt Secret is automatically created here.
module.exports.register = (req, res, next) => {
    var user = new User(); // new mongoose model User
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            if (err.code == 11000) { // the code is 11000 in case of duplicate email addresses.
                res.status(422).send(['Duplicate email address found.']);
            } else {
                return next(err);
            }
        }
    });

    // console.log('Inside register function');
}