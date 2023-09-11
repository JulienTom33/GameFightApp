const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');

// Chargement des variables d'environnement
dotenv.config();

// Méthode pour afficher le formulaire d'inscription
exports.getRegister = (req, res) => {
    res.render('register');
};

// Méthode pour traiter les données du formulaire d'inscription
exports.postRegister = async (req, res) => {
    try {
        const hashedPassword = await bcryptjs.hash(req.body.password, 10); // hashage du mot de passe
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.redirect('/register');
    }
};
    
// Méthode pour afficher le formulaire de connexion
exports.getLogin = (req, res) => {
    res.render('login');
};

// Méthode pour traiter les données du formulaire de connexion
exports.postLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user && (await bcryptjs.compare(req.body.password, user.password))) {
            // Créez le token comme vous le faites déjà
            const token = jwt.sign(
                {
                    userId: user._id,
                    username: user.username
                },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            res.cookie('token', token, {
                expire: new Date(Date.now() + 7200000), // expiration dans 2 heures
                httpOnly: true,
                secure: true // à activer si HTTPS
            });

            // Redirigez l'utilisateur vers la page de profil
            res.redirect('/profile');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/login');
    }
};

// Méthode pour se déconnecter
exports.logout = (req, res) => {
    res.clearCookie('token'); // supprime le cookie token
    res.redirect('/login');
}