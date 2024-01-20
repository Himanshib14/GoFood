const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://himanshibadola14:' + encodeURIComponent('himanshi123') + '@cluster0.39bgqlz.mongodb.net/?retryWrites=true&w=majority';

const mongoURI= 'mongodb+srv://himanshibadola14:himanshi123@cluster0.39bgqlz.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoURI = 'mongodb://himanshibadola14:himanshi123@ac-hi79icm-shard-00-00.39bgqlz.mongodb.net:27017,ac-hi79icm-shard-00-01.39bgqlz.mongodb.net:27017,ac-hi79icm-shard-00-02.39bgqlz.mongodb.net:27017/?ssl=true&replicaSet=atlas-xkltsh-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB =async() =>{
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err,result)=>{
        if(err) console.log("---", err)
        else{
        console.log("Connected finally");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err, data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
            // if(err) console.log(err);
            // else {
            //     global.food_items = data;
            // }
        })
    }
    });

    // try {
    //     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    //     console.log("Connected");
    // } catch (error) {
    //     console.error("Error connecting to MongoDB:", error);
    // }
}


module.exports = mongoDB;


