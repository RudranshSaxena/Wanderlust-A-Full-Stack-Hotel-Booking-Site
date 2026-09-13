const listing = require('./models/listing.js');
const review = require('./models/review.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema,reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req,res,next) => {
    console.log(req.user);
     if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Please Login First!");
        return res.redirect('/login');
        
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next) => {
    let {id}= req.params;
        let listings = await listing.findById(id);
        if(!listings.owner._id.equals(res.locals.currentuser._id)) {
            req.flash("error","You are not the Owner of this Listing!")
          return res.redirect(`/listings/${id}`);
        }
        next();
}

module.exports.validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
}else
        next();
}

module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
}else
        next();
}

module.exports.isAuthor = async (req,res,next) => {
    let {id,reviewId}= req.params;
        let Review = await review.findById(reviewId);
        if(!Review.author._id.equals(res.locals.currentuser._id)) {
            req.flash("error","You are not the author of this review!")
          return res.redirect(`/listings/${id}`);
        }
        next();
}