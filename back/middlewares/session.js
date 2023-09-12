const session = require('express-session')

module.exports = session({
    secret: 'JWT_SECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7200000, // Durée de validité de la session en millisecondes (2 heures)
        httpOnly: true,
        secure: true, // À activer si HTTPS
    }
})