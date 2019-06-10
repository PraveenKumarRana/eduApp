const db = require("../models");

exports.createNews = async function(req, res, next){
    try{
        // create the news
        let news = await db.News.create({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            text: req.body.text
        })

        // find the current stored news and populate the user data so that we can know that who has posted it.
    } catch(err) {
        next(err);
    }
}