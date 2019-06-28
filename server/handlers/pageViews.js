const db = require("../models");
pageCounterId = "5d134b9f945d2a1a575583ed";

exports.pageViewsDefault = async function(req, res, next){
    try{
        let initPageViews = await db.Counter.create({
            totalViews:0,
        });
        console.log(initPageViews._id);
        pageCounterId = initPageViews._id;
        return res.status(200).json(initPageViews);
    } catch(er){
        console.log(er);
        return res.status(400);
    }
}

exports.getPageViews = async function(req, res, next){
    try{
        let foundCount = await db.Counter.findById(pageCounterId);
        if(foundCount){
            let incrementCount = await db.Counter.updateOne(
                {"_id":foundCount._id},
                {$set:
                    { "totalViews":foundCount.totalViews + 1}
                }
            )
            console.log("Printing the incrementCount.")
            console.log(incrementCount);
            if(incrementCount){
                return res.status(200).json(foundCount);
            }
        } else {
            pageViewsDefault();
        }
    } catch(e){
        next(e);
    }
}