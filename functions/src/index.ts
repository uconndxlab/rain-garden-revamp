// The firebase functions API
import * as functions from 'firebase-functions';

/**
 * We're going to use express to handle requests
 * to the plants API. This will also handle CORS.
 */
const express = require('express');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

/**
 * We'll use AXIOS for requests.
 * @url https://github.com/axios/axios#example
 */
const axios = require('axios');

// Base URL for the existing API
const baseURL = 'https://nemo.uconn.edu/raingardens/getPlants.php?state_id=';


// Define any routes here:

// Route plants/:id
app.get('/plants/:id', (req:any, res:any) => {
    
    let id = Number(req.params.id);

    if(!isNaN(id)){

        let query = axios.get(`${baseURL}${id}`);
        
        query.then(function (response:any) {
            res.status(response.status).send(response.data);
        });

        query.catch(function (error:any) {
            res.status(error.response.status).send(error.response.data);
        });
    }else{
        res.status(500).send('ID must be an integer.')
    }
});


// Expose Express API as a single Cloud Function:
exports.plants = functions.https.onRequest(app);