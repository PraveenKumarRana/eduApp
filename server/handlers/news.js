const db = require("../models");

exports.createNews = async function(req, res, next){
    try{
        // create the news
        let news = await db.News.create({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            text: req.body.text
        })
        let foundUser = await db.User.findById(req.params.id);
        foundUser.news.push(news._id);

        await foundUser.save();
        // find the current stored news and populate the user data so that we can know that who has posted it.
        let foundNews = await db.News.findById(news._id).populate("user", {
            username: true,
            profileImageUrl: true
        });

        return res.status(200).json(foundNews);
    } catch(err) {
        next(err);
    }
}