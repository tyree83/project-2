// require user model
const User = require('../models/user');

//  require the bcrypt module
const bcrypt = require('bcrypt');

// create a cons variable to store the SALT_ROUNDS
const SALT_ROUNDS = 10;


module.exports = {
    new: newUser,
    signUp,
    signIn,
    signOut,
    login
};

function newUser(req, res){
    res.render('users/new.ejs');
}

function signUp(req, res) {
    // hash the user password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    // save the user with the hashed password
    User.create(req.body, function (error, newUser) {
        console.log(newUser) // let's check out our new user
        // redirect back to home route
        res.redirect('/');
    });
}

function signIn(req, res) {
    res.render('users/login')
}

function login(req, res) {
    // find the user in the database - we need to see if they exist
    User.findOne({ username: req.body.username }, function(err, foundUser) {
        if(foundUser === null) {
            // if they don't exist - redirect back to login
            res.redirect('/users/signin');
        } else {
            // if they do exist - compare the password, is it a match?
            const isMatched = bcrypt.compareSync(req.body.password, foundUser.password);
            // if the password matches - login them in
            if(isMatched) {
                //    add the user to a new session
                req.session.userId = foundUser._id;
                //   redirect to a secure location 
                res.redirect('/plants');
            } else {
                // if the password is wrong - redirect back to login
                res.redirect('/users/signin');
            }
        }
    });
}


function signOut(req, res) {
    // destroy session
    req.session.destroy(function(err) {
        // delete req.user
        delete req.user;
        // redirect back home
        res.redirect('/');
    });
}