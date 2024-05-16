const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://dimpi1241be20:TJZi4JoZk7wCJIFs@cluster0.1tewfag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
  username : String,
  name : String,
  email : String,
  password : String,
  profileImage : String,
  contact: Number,
  boards : {
    type : Array,
    default : []
  },
  posts: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "post"
  }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);