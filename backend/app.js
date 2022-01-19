// import express module
const express = require('express');
// import body-parser module
const bodyParser = require('body-parser');
// import Path module
const path = require('path');
// import axios module
const axios = require('axios');
// create express application
const app = express();

const matchRoutes = require('./routes/match-routes');
const userRoutes = require('./routes/user-routes');
const teamRoutes = require('./routes/team-routes');
// configure Body Parser
// send response with JSON format
app.use(bodyParser.json());
// parse objects sended from FE
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST,DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// DB configuration
// import mongoose module
const mongoose = require('mongoose');
// connect app to DB
mongoose.connect('mongodb://localhost:27017/sportHavanaDB');

// Multer configuration
app.use('/images', express.static(path.join('backend/images')))


// Business Logic: Get ALL Players
// app.get("/players", (req, res) => {
//     console.log('Here into business logic of Get ALL players');
//     // players === DB

//     res.status(200).json({
//         result: players,
//         message: 'Here all players'
//     });
// });



// // Business Logic: Calculate IMC
// app.post("/players/imc", (req, res) => {
//     console.log('Here player values', req.body);
//     let height = req.body.height;
//     let weight = req.body.weight;
//     let imc = weight / (height * height * 0.0001);
//     console.log('IMC = ', imc);
//     let message;
//     if (imc <= 18.5) {
//         message = "Insuffisance";
//     } else if (18.5 < imc <= 24.9) {
//         message = "Normal";
//     } else if (25 <= imc <= 29.9) {
//         message = "Sur poids";
//     } else {
//         message = "Obésité";
//     }
//     res.status(200).json({
//         message: message,
//         imc: imc
//     });
// });



// Business Logic: get player by ID
// app.get("/players/:id", (req, res) => {
//     console.log('Here into get player by id', req.params.id);
//     let findePlayer = players.find((obj) => {
//         return obj.id == req.params.id
//     });
//     res.status(200).json({
//         result: findePlayer,
//         message: 'Here finded Player'
//     });
// });

// // Business Logic: Get all articles
// app.get("/articles", (req, res) => {
//     console.log('here into get all articles');
//     res.status(200).json({
//         result: articles,
//         message: 'Here all artciles'
//     })
// });

// // Business Logic: Add article
// app.post("/articles", (req, res) => {
//     console.log('here into add article', req.body);
//     articles.push(req.body);
//     res.status(200).json({
//         message: 'Added with sucess'
//     })
// });

// // Business Logic: get article by ID
// app.get("/articles/:id", (req, res) => {
//     console.log('Here into get article by id', req.params.id);
//     let findedArticle = articles.find((obj) => {
//         return obj.id == req.params.id
//     });
//     res.status(200).json({
//         result: findedArticle,
//         message: 'Here finded Article'
//     });
// });

// // Business Logic: Edit article
// app.put("/articles/:id", (req, res) => {
//     console.log('Here into edit article id', req.params.id);
//     console.log('Here into edit article body', req.body);
//     for (let i = 0; i < articles.length; i++) {
//         if (articles[i].id == req.params.id) {
//             articles[i] = req.body;
//             break;
//         }
//     }
//     res.status(200).json({
//         message: 'Edited with success'
//     })
// });

app.get('/api/weather/:cityObj', (req, res) => {
    console.log('Here into weather', JSON.parse(req.params.cityObj).city);
    // connect to OPEN WEATHER API
    // define API KEY
    // SEND REQ (GET, @)
    // AXIOS (installed, imported)
    let city = JSON.parse(req.params.cityObj).city;
    let key = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" + city +
        "&appid=" + key;

    axios.get(apiUrl)
        .catch((err) => {
            console.log('Axios response', err);
            if (err.response.status == 404) {
                console.log('404 Not FOUND');
                res.status(200).json({
                    message: 'Please check City Name'
                })
            }
        })
        .then((response) => {
            console.log('Here data main', response.data.main);
            console.log('Here data wind', response.data.wind);

            let weatherData = {
                temp: response.data.main.temp,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed
            }
            res.status(200).json({
                result: weatherData,
                message: 'OK'
            })
        })
});


app.use('/api/matches', matchRoutes);
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
module.exports = app;