const User = require('../models/userSchema');

const getProfile = async(req,res)=>{
    res.render('Profile' , {title : "User-profile"});
}


//rendering signup page
const userSignUp = async(req,res)=>{
    try {
        if(req.isAuthenticated()){
            return res.redirect('/user/profile');
        }

        res.render('user_signUp' , {title : "Sign-Up"});
    } catch (error) {
        console.log(error.message);
    }
}


//redering signin page
const userSignIn = async(req,res)=>{
    try {
        if(req.isAuthenticated()){
            return res.redirect('/user/profile');
        }

        res.render('user_signIn' , {title : "Sign-In"});
    } catch (error) {
        console.log(error.message);
    }
}


//post request creating a user on signUp page
const create = async(req,res)=>{
    try {
        if(req.body.password != req.body.confirmpassword){
            console.log("password does not match");
           return res.redirect('back');
        }

        const user =await User.findOne({email : req.body.email});

        if(!user){
            const doc = new User({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            });

            const result = await doc.save();
            
            res.redirect('/user/signin');
        }

        
        
    } catch (error) {
        console.log(error.message);
    }

}
//post request  user login
const createSession = async(req,res)=>{
    return res.redirect('/user/profile');
}


//logout user
const destroySession = async(req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}


module.exports = {
    getProfile , userSignUp , userSignIn , create , createSession , destroySession
}

