const express = require('express')
const app = express();
let port = 5000;
const path = require('path');
const template_path = path.join(__dirname, "../template/views");
const empcollection = require("./model/model");
app.set('view engine','hbs');
app.set('views',template_path);
const mongoose = require('mongoose')

app.use(express.urlencoded({extended:true}));
require('./db/db');
app.get('/',(req,res)=>{
    res.render('index');
})

    
    app.listen(port,()=>{
        console.log("listening to the port ${port}");
    })

    app.post('/empdata', async(req,res)=>{
      
            const{regd_no,name,email,branch} = req.body
            const user = new Users({
            regd_no,
            name,
            email,
            branch
            })
            await user.save()
            console.log(user)  
        res.send("Form Submitted Successfully")
        })
     
        const userSchema = new mongoose.Schema({
            regd_no:String,
            name:String,
            email:String,
            branch:String
          })
          const Users = mongoose.model('empdata',userSchema)  
       
     



