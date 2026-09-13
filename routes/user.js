const express= require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const {saveRedirectUrl} = require("../middleware.js");
const UserController = require('../controllers/users.js');


//SIGNUP ROUTE
router.route("/signup")
.get (UserController.RenderUserForm)
.post(wrapAsync(UserController.AddNewUser));

//LOGIN ROUTE
router.route('/login')
.get(UserController.RenderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",
    { failureRedirect : '/login',
        failureFlash : true
    }
),UserController.LoginAuthentication);


//LOGOUT ROUTE
router.get("/logout",UserController.Logoutroute);

module.exports = router;

// Rudransh123