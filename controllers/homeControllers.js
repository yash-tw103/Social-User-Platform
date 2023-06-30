const User = require("../models/userSchema");
const Post = require('../models/postsSchema');

const getHome = async(req,res)=>{

    try {
        const post = await Post.find().populate('user').populate({
            path : 'comments',
            populate:{
                path : 'user'
            }
        }).exec();
        // console.log(post);
        res.render("home" , {title : "Home" , posts :post});

        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHome
}