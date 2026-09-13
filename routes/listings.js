const express= require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {listingSchema,reviewSchema}= require('../schema.js');
const ExpressError = require('../utils/ExpressError.js');
const listing= require('../models/listing.js');
const {isLoggedIn} = require('../middleware.js');
const {isOwner} = require("../middleware.js");
const listingController = require('../controllers/listings.js');
const multer  = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({ storage })

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
}else
        next();
}

//INDEX ROUTE & CREATE ROUTE
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,validateListing,upload.single('listing[image]'),wrapAsync(listingController.createListing));

//NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm);

//SHOW ROUTE,UPDATE ROUTE & DELETE ROUTE
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));


module.exports = router;