const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KQxaQIdi9UJJW0j0Pvpezu2bOwK8t6dUDmP8S6J6mzB33RJ8Xkzu6E5gymIPNS1JrInPQa6YSDbM5MD5omDsM9V00KPmMugbJ")

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-84264/us-central1/api