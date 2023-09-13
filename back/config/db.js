const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = async () => {
    try {            
            await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });        
        console.log('connection to db success');
    } catch (error) {
        console.log('an error has occured', error);
    }
};

const disconnectFromDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('disconnection success');
    } catch (error) {
        console.log('an error has occured', error);
    }
};

const initDatabase = async () => {
    await connectToDB ()
};

module.exports = { initDatabase, disconnectFromDB }