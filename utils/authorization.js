// require the user model
const User = require('../models/user');
// module.exports

module.exports = {
    addUserToRequest,
    isAuthenticated
}


// a function to add the user to a property called user on the request object
// aka req.user
function addUserToRequest(req, res, next) {
    // if(req.user) return next();
    if(req.session && req.session.userId) {
        User.findById(req.session.userId, function(err, foundUser){
            req.user = foundUser;
            next();
        })
    } else {
        next();
    }
}

// a function to check if a user is authenticated

function isAuthenticated(req, res, next) {
    // TODO: finish defining function
    if(req.user !== undefined) return next(); //there's an authenticated user
    res.redirect('/users/signin'); //sends them to the login page
}