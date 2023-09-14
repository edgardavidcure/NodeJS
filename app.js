const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('web server is listening at port ' + (process.env.PORT || 3000));
});