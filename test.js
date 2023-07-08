const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connnect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});
 */

//read a photo
/* Photo.find({})
.then((data) => {
    console.log(data);
});
 */

//update a photo
/* const id = "64a940afd3cce09876982f6a";

Photo.findByIdAndUpdate(
  id, 
  {
  title: "Photo Title 111 updated",
  description: "Photo description 111 updated",
  },
  {
    new: true
  },
  )
.then((data) => {
  console.log(data);
});
 */

//delete a photo
/* const id = '64a94227105f91884eef12e8';
Photo.findByIdAndDelete(id).then((data) => {
  console.log(data+'photo is removed');
});
 */