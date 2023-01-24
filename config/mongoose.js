const mongoose= require('mongoose');
const db= mongoose.connection;

mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://nandani:nandani21@nandani.dwyoj0v.mongodb.net/?retryWrites=true&w=majority');

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;