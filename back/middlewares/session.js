const session = require('express-session')

module.exports = session({
    secret: 'JWT_SECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false
    }
})