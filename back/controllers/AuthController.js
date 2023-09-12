const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

// Chargement des variables d'environnement
dotenv.config();

// Méthode pour traiter les données du formulaire d'inscription
exports.register = async (req, res) => {
     // hash the password
     bcryptjs
     .hash(req.body.password, 10)
     .then((hashedPassword) => {
       // create a new user instance and collect the data
       const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
       }); 
       // save the new user
       user
         .save()         
         .then((result) => {
           res.status(201).send({
             message: "User Created Successfully",
             result,
           });
         })
         // catch error if the new user wasn't added successfully to the database
         .catch((error) => {
           res.status(500).send({
             message: "Error creating user",
             error,
           });
         });
     })
     // catch error if the password hash isn't successful
     .catch((e) => {
       res.status(500).send({
         message: "Password was not hashed successfully",
         e,
       });
     });
    };

exports.login = async (req, res) => {

      // check if email exists
      User.findOne({ email: req.body.email })      
        
        // if email exists
        .then((user) => {
          // compare the password entered and the hashed password found
          bcryptjs
            .compare(req.body.password, user.password)
        
            // if the passwords match
            .then((passwordCheck) => {
        
              // check if user is already connected
              if (req.user) {
                return res.status(400).send({
                  message: "User is already connected",
                  error: null,
                });
              }
        
              const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email
                },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
              );  
                  
              req.session.token = token;                
  
              res.cookie('token', token, {
                  expire: new Date(Date.now() + 7200000), // expiration dans 2 heures
                  httpOnly: true,
                  secure: true // à activer si HTTPS
              });
        
              //   return success response
              res.status(200).send({
                message: "Login Successful",
                email: user.email,
                username: user.username,
                token,
              });
            })
            // catch error if password does not match
            .catch((error) => {
              res.status(400).send({
                message: "Passwords does not match",
                error,
              });
            });
        })
        // catch error if email does not exist
        .catch((e) => {
          res.status(404).send({
            message: "Email not found",
            e,
          });
        });
  };
   
    
// exports.login = async (req, res) => {

//         // check if email exists
//         User.findOne({ email: req.body.email })      
      
//           // if email exists
//           .then((user) => {
//             // compare the password entered and the hashed password found
//             bcryptjs
//               .compare(req.body.password, user.password)
      
//               // if the passwords match
//               .then((passwordCheck) => {
      
//                 // check if password matches
//                 if(!passwordCheck) {
//                   return response.status(400).send({
//                     message: "Passwords does not match",
//                     error,
//                   });
//                 }
      
//                 const token = jwt.sign(
//                     {
//                         userId: user._id,
//                         email: user.email
//                     },
//                     process.env.JWT_SECRET,
//                     { expiresIn: '24h' }
//                 );  
                
//                 req.session.token = token;                

//                 res.cookie('token', token, {
//                     expire: new Date(Date.now() + 7200000), // expiration dans 2 heures
//                     httpOnly: true,
//                     secure: true // à activer si HTTPS
//                 });
      
//                 //   return success response
//                 res.status(200).send({
//                   message: "Login Successful",
//                   email: user.email,
//                   username: user.username,
//                   token,
//                 });
//               })
//               // catch error if password does not match
//               .catch((error) => {
//                 res.status(400).send({
//                   message: "Passwords does not match",
//                   error,
//                 });
//               });
//           })
//           // catch error if email does not exist
//           .catch((e) => {
//             res.status(404).send({
//               message: "Email not found",
//               e,
//             });
//           });
//       };

// Méthode pour se déconnecter
exports.logout = (req, res) => {
    res.clearCookie('token'); // supprime le cookie token
    res.redirect('/');
}