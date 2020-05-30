var mongoose = require('mongoose');
var dishes = require('./models/dishes');
const url = "mongodb://localhost:27017/confusion";
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("connected to server");
    dishes.create({
        name: "Jack",
        description: "test"
    }).then((dish) => {
        console.log(dish);
        return dishes.findByIdAndUpdate(dish._id,{
             $set:{description:"Updated"}},
            {new:true}
        ).exec();
    }).then((dish) => {
        console.log(dish);
        dish.comments.push({
            rating:5,
            comment:'I am author',
            author:"Mohit"
        });
        return dish.save();
    }).then((dish)=>{
        console.log(dish);
        return dishes.remove({});
    }).then(() => {
        mongoose.connection.close();
    }).catch((err) => {
        console.log(err);
    })
})
