const User = require('../models/user.js');

module.exports.RenderUserForm = (req,res) => {
    res.render('users/signup.ejs');
};

module.exports.AddNewUser = async (req,res)=> {
   try {
    let {username,email,password} = req.body;
    let newUser = new User ({
        username,email
    });
    const registereduser = await User.register(newUser,`${password}`);
    console.log(registereduser);
    req.login(registereduser,((err)=> {
        if(err) {
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust!");
        res.redirect('/listings');
    }));
}catch(err) {
    req.flash("error",err.message);
    res.redirect('/signup');
}
};

module.exports.RenderLoginForm = (req,res)=> {
    res.render('users/login.ejs');
};

module.exports.LoginAuthentication =  async(req,res) => {
        req.flash("success","Welcome Back!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
};

module.exports.Logoutroute = (req,res,next) => {
    req.logout((err)=> {
        if(err) {
            return next(err);
        }
        req.flash("success","You are Logged-out!");
        res.redirect('/listings');
    }) 
}