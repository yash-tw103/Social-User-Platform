const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content :{
        type : String,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
},{
    timestamps : true
});

module.exports = mongoose.model('Post' , postSchema);