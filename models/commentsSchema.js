const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    content : {
        type : String,
        require : true
    },
    //comments belong to a user
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    post :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Comment' , commentsSchema);