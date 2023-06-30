const Post = require('../models/postsSchema');

const createPosts = async(req,res)=>{
    try {
        const posts = new Post({
            content : req.body.content,
            user : req.user._id
        });

        const result = await posts.save();
        // console.log(result);
        res.redirect('back');

    } catch (error) {
        console.log(error.message);
    }
}

const getPosts = async(req,res)=>{
    
}

module.exports = {
    createPosts , getPosts
}