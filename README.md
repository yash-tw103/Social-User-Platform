# Socila-User-Platform-like-quora
# Understanding Folder Structure
# Config
  - dbconnection.js contains all our databse connnection Through MongoDb
  - passport.js contains our Authentication file with passport local Strategy , authenticating user etc.
# Controllers
 - commentsController.js contains all the Functions for our CommentsRoutes to add comments to User Post.
 - homeController contains the main view of our App
 - postControllers contains our functionality to upload post
 - Usercontrollers contains function for reisterin and authenticatin user
# models
   - commentsSchema contains Schema of our comments which is linked throuh posts and user.
   - postsSchema contains Schema to insert post in database linked with User having ccomments as an array.
   - userSchema contains Schema to reister user with name , email , password.
# Routes
  Contains all the routes for the Controllers function
# Views
  Contains Home file for all users post , profile for the particular user profile page , sign up and sign in file.
   
