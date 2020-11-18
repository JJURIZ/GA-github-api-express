const express = require('express');
const axios = require('axios');

//create the app
const app = express();


// Create a PORT
const PORT = process.env.PORT || 3000;

// THIS IS ME
app.get('/me', (req, res) => {

    // Access API endpoint from GitHub
    axios.get('https://api.github.com/users/jjuriz')
    .then(response => {
        //Print inside of terminal
        const data = response.data;
        // console.log(response.data);
        const myData = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };

        console.log(myData);
        res.send(myData);
    })
})

// Nitish route
app.get('/nitish', (req, res) => {
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        const data = response.data;
        const nitishObject = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };
        console.log(nitishObject);
        res.send(nitishObject);
    })
})

// Jenny Route
app.get('/jenny', (req, res) => {
    axios.get('https://api.github.com/users/ruvvet')
    .then(response => {
        const data = response.data;
        const jennyObject = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };
        console.log(jennyObject);
        res.send(jennyObject);
    })
})

// Simone Route
app.get('/simone', (req, res) => {
    axios.get('https://api.github.com/users/sschneeberg')
    .then(response => {
        const data = response.data;
        const simoneObject = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };
        console.log(simoneObject);
        res.send(simoneObject);
    })
})

// Alan Path
app.get('/alan', (req, res) => {
    axios.get('https://api.github.com/users/delayedaa')
    .then(response => {
        const data = response.data;
        const alanObject = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };
        console.log(alanObject);
        res.send(alanObject);
    })
})

// Corey Path
app.get('/corey', (req, res) => {
    axios.get('https://api.github.com/users/CoreyWilson319')
    .then(response => {
        const data = response.data;
        const coreyObject = {
            login: data.login,
            url: data.html_url,
            name: data.name
        };
        console.log(coreyObject);
        res.send(coreyObject);
    })
})


// Listen on a PORT
app.listen(PORT, () => {
    console.log(`You're on PORT ${PORT} `)
})

// login, html url, name