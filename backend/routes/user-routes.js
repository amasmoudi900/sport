const express = require('express');
const router = express.Router();
const User = require('../models/user');
// import bcrypt module
const bcrypt = require('bcrypt');
// Business Logic: Login
router.post("/login", (req, res) => {
    console.log('Here into login', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Finded User by email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                });
            }
            return bcrypt.compare(req.body.pwd, emailResult.password);
        }
    ).then(
        (pwdResult) => {
            console.log('Here pwd result ', pwdResult);
            if (!pwdResult) {
                res.status(200).json({
                    message: '1'
                });
            }
            User.findOne({ email: req.body.email }).then(
                (finalUser) => {
                    console.log('Final User', finalUser);
                    let userToSend = {
                        fName: finalUser.fName,
                        lName: finalUser.lName,
                        role: finalUser.role,
                        id: finalUser._id
                    }
                    res.status(200).json({
                        message: '2',
                        user: userToSend
                    });
                }
            )
        }
    )
});

// Business Logic: Signup
router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.pwd, 8).then(
        (cryptedPwd) => {
            console.log('Crypted Pwd', cryptedPwd);
            const userObj = new User({
                fName: req.body.firstName,
                lName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,
                role: req.body.role
            });
            userObj.save((err, result) => {
                console.log('Result after save', result);
                if (err) {
                    if (err.errors.email) {
                        console.log('Error with email');
                        res.status(200).json({
                            message: "0"
                        });
                    }


                } else {
                    res.status(200).json({
                        message: "User Added with success"
                    });
                }
            })
        }
    )
});

// Business Logic: User Profile
router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json({
                message: 'Here finded User',
                result: result
            })
        }
    )
});


module.exports = router;