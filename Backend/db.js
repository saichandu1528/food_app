//in password # can be replaced with %23
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://gofood:Sai1528%23@cluster0.rzhfmoq.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
    
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = mongoose.connection.db.collection("foodcategory");
    const catData = await foodCategory.find({}).toArray();
    global.food_items=data;
    global.foodCategory=catData;

    
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};


module.exports = mongoDB;
