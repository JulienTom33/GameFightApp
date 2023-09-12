const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Middleware async
const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        // L'utilisateur n'est pas connecté, vous pouvez gérer cela ici
        // Par exemple, envoyer une réponse indiquant que l'utilisateur n'est pas connecté
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedUser) {
        res.clearCookie('token'); // Supprime le token invalide ou expiré
        // Vous pouvez également envoyer une réponse indiquant que le token est invalide
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Assigne les informations de l'utilisateur à la requête
    req.user = decodedUser;
    next();
};

/**
 * Middleware pour rediriger l'utilisateur s'il est déjà connecté.
 * Sinon, il continue vers la prochaine route/middleware.
 */
function redirectIfLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) return next(); // Si l'utilisateur n'est pas connecté, continuez

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (!err && decodedUser) {
            // Si l'utilisateur est connecté, vous pouvez ajouter des actions ici si nécessaire
            // Par exemple, renvoyer une réponse JSON indiquant qu'il est déjà connecté
            res.status(200).json({ message: 'Already logged in' });
        }
        next();
    });
}

module.exports = {
    isLoggedIn,
    redirectIfLoggedIn
};