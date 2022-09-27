const express = require('express');
const app = express();


app.get('/users', () => {console.log('Hola Mundo');})

app.listen(3000, (error) => { 
    error ? console.log(error) : console.log('Server running');
});