# Social-User-Platform-like-quora
# Understanding Folder Structure
# Config
  - dbconnection.js contains all our databse connnection Through MongoDb
  - passport.js contains our Authentication file with passport local Strategy , authenticating user etc.
# Controllers
 - commentsController.js contains all the Functions for our CommentsRoutes to add comments to User Post.
 - homeController contains the main view of our App
 - postControllers contains our functionality to upload post
 - Usercontrollers contains function for reigsterinh and authenticating user
# models
   - commentsSchema contains Schema of our comments which is linked throuh posts and user.
   - postsSchema contains Schema to insert post in database linked with User having ccomments as an array.
   - userSchema contains Schema to register user with name , email , password.
# Routes
  Contains all the routes for the Controllers function
# Views
  Contains Home file for all users post , profile for the particular user profile page , sign up and sign in file.
   
# More Features Yet To add 
 - Creating a chatting Engine.
 - Adding followers and following for the User.
 - Creating action for liking Disliking Post.
 - Updating User Profile
 
# more Complex Features to add
 Adding a payment option for the user for taking Subscriptions for the premium posts etc.
