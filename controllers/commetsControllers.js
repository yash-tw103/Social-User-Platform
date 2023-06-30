const Comment = require('../models/commentsSchema');

const Post =require('../models/postsSchema');

const creatComment = async(req,res)=>{
    try {
        const post =await Post.findById(req.body.post);

        if(post){
            const comment = new Comment({
                content : req.body.content,
                post: req.body.post,
                user : req.user._id
            });
            await comment.save();
            post.comments.push(comment);
            
            const result = await post.save();
            
            // console.log(result);
            res.redirect('/');
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    creatComment
}