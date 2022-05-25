const express = require('express');

const app = express();

function delay(duration) {
    const startTime= Date.now()
    while(Date.now() - startTime < duration) {

    }
};

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    res.send(`Performance example: ${process.pid}`)
});

app.get('/timer', (req, res) => {
    delay(4000);
    res.send(`Beep Beep Beep! ${process.pid}`)
});


    app.listen(3000);