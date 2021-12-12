const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient

//mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
mongoose.connect('mongodb+srv://HaNgocLinh106:Gau106@cluster0.bclnu.mongodb.net/QLLichKham',  { useNewUrlParser: true },(err) => {
//MongoClient.connect('mongodb+srv://HaNgocLinh106:Gau106@cluster0.bclnu.mongodb.net/test', { useUnifiedTopology: true },(err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;