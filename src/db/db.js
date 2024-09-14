const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user20:sound2000@balaji.sj8yn.mongodb.net/empdata')
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log(error);
})