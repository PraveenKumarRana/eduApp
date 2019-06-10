const db = require("../models");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// This will be helping us in sending the mail to the user so that we can verify it..
async function verifyMail(mailId, key){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'projectdbmshelp@gmail.com',
          pass: 'razne7-tobsuc-kyxtaG'
        }
      });
      emailto = `${mailId}`;
      var text = `<h1>Verification ID : ${key}</h1>`;

      var mailOptions = {
        from: 'projectdbmshelp@gmail.com',
        to: emailto,
        subject: 'We have sent you mail verification code please enter it to create an account.',
        html:text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

exports.signin = async function(req, res, next){
    try{
        // finding the user
        let user = await db.User.findOne({
            email: req.body.email
        });
        let {id, username, profileImageUrl} = user;
        // checking the password that has been sent to the user.
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch){
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            },
            process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            });
        } else {
            return next({
                status : 400,
                message : "Invalid email or password."
            })
        }
        // if password matches
        // log them in
    } catch(err) {
        return next({
            status : 400,
            message : "Invalid email or password."
        })
    }
    
};

exports.signup = async function(req, res, next){
    try{
        let user = await db.User.create(req.body);
        let {id, username, profileImageUrl } = user;
        let token = jwt.sign({
            id: id,
            username: username,
            profileImageUrl: profileImageUrl
        },
        process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
       
    } catch(err){
        // The err.code is 11000 when the username or password is already taken.
        if(err.code === 11000){
            err.message = "Sorry, that username and/or email is taken";
        }
        return next({
            status: 400,
            message: err.message
        });
    }
};