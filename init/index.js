const mongoose= require('mongoose');
let initdata = require('./data.js');
const listing= require('../models/listing.js');

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';
main().then((res) => {
    console.log('Database connected successfully!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
 await listing.deleteMany({});
 initdata = initdata.data.map((obj) => ({...obj, owner : "6a8c6ea07db1990c7fa590d9"}))
 await listing.insertMany(initdata);
 console.log('data was initialised');
};
initDB();