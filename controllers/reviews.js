const listing= require('../models/listing.js');
const review = require('../models/review.js');

module.exports.postReview = async(req,res)=>{
    let newlisting = await listing.findById(req.params.id);
    let newReview = new review (req.body.review);
    newReview.author = req.user._id;
    newlisting.reviews.push(newReview);
    await newReview.save();
    await newlisting.save();
    req.flash("success","New Review Added Successfully!");
    res.redirect(`/listings/${newlisting._id}`)
};

module.exports.deleteReview = async(req,res) =>{
    let {id,reviewId} = req.params;
    await listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`)
};