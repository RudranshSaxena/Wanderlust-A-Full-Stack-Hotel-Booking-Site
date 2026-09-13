const express= require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const {reviewSchema}= require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const listing= require('../models/listing.js');
const review = require('../models/review.js');
const {isLoggedIn,isAuthor} = require('../middleware.js');
const reviewController = require('../controllers/reviews.js');


const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
}else
        next();
}

//REVIEWS ROUTE
router.post('/',isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

//REVIEW DELETE ROUTE
router.delete('/:reviewId',isLoggedIn,isAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;