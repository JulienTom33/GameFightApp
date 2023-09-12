// Importation des modules nécessaires
const User = require('../models/User');
const { userResponseParser } = require('../utils/UserResponseParser')



// Function pour récupérer le profil de l'utilisateur
exports.getUser = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const user = await User.findById(req.user.id);
        console.log(user)        

        // Vous pouvez maintenant renvoyer les informations de l'utilisateur
        //si l'utilisateur n'existe pas, on renvoie une erreur
        if (!user) {
            return res.status(404).json({error: 'Utilisateur non trouvé'});
        }
        res.status(200).json({ user });        

    } catch (error) {
        console.error(error);
        // en cas d'erreur, on renvoie une erreur 500
        res.status(500).send('Erreur de récupération du profil');

    }
};


        
// Function pour modifier le profil de l'utilisateur
exports.updateProfil = async (req, res) => {
    try {
        const {username, email} = req.body;

        // Mettre à jour l'utilisateur en fonction de son id stocké dans le cookie
        await User.findByIdAndUpdate(req.user.userId, {username, email});

        // Rediriger l'utilisateur vers la page profil
        res.redirect('/profile');

    } catch (error) {
        console.error(error);
        // en cas d'erreur, on renvoie une erreur 500
        res.status(500).send('Erreur de modification du profil');
    }
};

// Function pour supprimer le profil de l'utilisateur
exports.deleteProfil = async (req, res) => {
    try {
        //Supprimer l'utilisateur en fonction de son id stocké dans le cookie
        await User.findByIdAndDelete(req.user.userId);
        res.redirect('/');
    }
    catch (error) {
        console.error(error);
        // en cas d'erreur, on renvoie une erreur 500
        res.status(500).send('Erreur lors de la suppression du profil');
    }
};




