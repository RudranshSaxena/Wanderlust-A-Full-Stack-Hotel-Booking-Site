const listing= require('../models/listing.js');

module.exports.index = async (req,res) => {
    let allListings = await listing.find();
    res.render('listings/index.ejs',{allListings});
};

module.exports.renderNewForm = (req,res)=> {
    res.render('listings/new.ejs');
};

module.exports.createListing = async (req,res)=> {
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing= new listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    await newListing.save();
    req.flash("success","New Listed Created Successfully!");
    res.redirect('/listings');
};

module.exports.showListing = async (req,res)=> {
    let {id} = req.params;
    let list= await listing.findById(id)
    .populate({
        path : 'reviews',
        populate: {
            path: 'author'
        },
    }).populate("owner");
    if(!list){
        req.flash('error','Listing you requested for does not exist!');
            return res.redirect('/listings');
    }
    res.render("listings/show.ejs",{list});
};

module.exports.editListing = async (req,res)=> {
    let {id}= req.params;
    let Editlist= await listing.findById(id);
    if(!Editlist){
        req.flash('error','Listing you requested for does not exist!');
            return res.redirect('/listings');
    }

    let originalImageUrl = Editlist.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
    
    req.flash("success","This Listing is Edited Successfully!");
    res.render('listings/edit.ejs',{Editlist,originalImageUrl}) ;
};

module.exports.updateListing = async (req,res)=> {
    if(!req.body.listing){
        throw new ExpressError(400,'Send valid data for listing')
    }
    let {id}= req.params;
    let list= await req.body.listing ;
    let updatedlisting=await listing.findByIdAndUpdate(id,list);
    
    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedlisting.image =  {url,filename} ; 
    await updatedlisting.save();
    }
    
    req.flash("success","Listing is Updated Successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res)=> {
    let {id} = req.params;
    let Deletedlist=await listing.findByIdAndDelete(id);
    console.log(Deletedlist);
    req.flash("success","Listing Deleted!");
    res.redirect('/listings')
};