const mongoose = require('mongoose');

const DB = process.env.DATABASE

const url = `mongodb://127.0.0.1:27017`

mongoose.connect(DB).then(()=>console.log('db Connected')).catch((err)=>{

    console.log(err);
})
    