var mongoose = require('mongoose');
var dishes = require('./models/dishes');
const url = "mongodb://localhost:27017/confusion";
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("connected to server");
    dishes.create({
        name: "Rohit",
        description: "test"
    }).then((dish) => {
        console.log(dish);
        return dishes.find({}).exec();
    }).then((dish) => {
        console.log(dish);
        return dishes.remove({});
    }).then(() => {
        mongoose.connection.close();
    }).catch((err) => {
        console.log(err);
    })
})