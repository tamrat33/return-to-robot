const client = require("../dbConnection");

function findAll(callback) {

let profile =
client.db.collection("profile");
profiles.find({}).toArray((err, data) => {
  callback(data);
});
}

function findById(id){
  return users.find((el) =>{
    return el.id ==id ;
  });
}

module.exports ={
  findAll:findAll,
  findById:findById
}
