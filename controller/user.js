const user = require('../models/userSchema');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { createJwtToken} = require("../util/token");


const createRegister = async(req, res)=>{
    try {
        const {firstName, lastName, email, phoneNo, password} = req.body;
        if(phoneNo===toString()){
            res.send({message: 'Please Enter Number Value'})
        }
        const d = await user.find();
        let data = {};
        d.map((item)=>{
            data=item.email;
        })
        if(data!=email){
            const result = await user.insertMany({firstName,lastName,email,phoneNo,password});
            res.send(result)
        }
        else{
            res.send({message: 'Please enter different email'})
        }
    } catch (error) {
        console.log(error);
    }
}
const getLogin = async(req, res)=>{
    try {
        const {email,password} = req.body;
        const data = await user.find();
        let email_val = {};
        let password_val = {};
        const token = createJwtToken(data.id);
        // const token = await jwt.sign({email:"garvishjain1997@gmail.com"}, process.env.SECRETKEY);
        console.log(token);
        data.map((item)=>{
            email_val =item.email;
            password_val = item.password;
        })
        if(email_val===email){
            if(password_val===password){
                res.send({message: 'Login Successful',token})
            }
            else{
                res.send({message: 'Incorrect Password'})
            }
        }
        else{
            res.send({message: 'Incorrect Email'})
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createRegister,getLogin};