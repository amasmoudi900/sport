const express = require('express');
const router = express.Router();
// import Team Model
const Team = require('../models/team');
// import multer module
const multer = require('multer');
// Business Logic: Get All teams
router.get("/", (req, res) => {
    console.log('Here into get all teams');
    Team.find((err, teams) => {
        if (err) {
            console.log('Error with DB');
        } else {
            res.status(200).json({
                teamsResult: teams,
                message: 'Here all teams'
            })
        }
    })
});

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storageConfig = multer.diskStorage({ 
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    // filename
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-'); 
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +extension;
        cb(null, imgName);
    }
});
// Business Logic: Add Team
router.post('/', multer({ storage: storageConfig }).single('img'),  (req, res) => {
    console.log('Here into add team');
    let protocol = req.protocol;
    console.log('Protocol', protocol);
    let host = req.get('host');
    console.log('Host', host);
    let url = protocol + '://' + host;
    console.log('Here Base URL', url);

    let fileName = (req.file) ? req.file.filename : 'anonymous.png';
    console.log('fileName', fileName);
    let teamObj = new Team({
        name: req.body.name,
        foundation: req.body.foundation,
        country: req.body.country,
        stadium: req.body.stadium,
        img: url + '/images/' + fileName
    });
    teamObj.save((err, result)=> {
        console.log('Result', result);
        if (err) {
            console.log('Here error', err);
        } else {
            res.status(200).json({
                message:'Added with success'
            })
        }
    })
});

module.exports = router;