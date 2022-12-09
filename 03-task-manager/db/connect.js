const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://OlaOLuwalekan:Jesus200593@nodeexpresstutorial.0zgn2ff.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// .then(() => console.log("CONNECTED TO DB..."))
// .catch((err) => console.log(err));
