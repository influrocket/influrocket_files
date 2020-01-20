const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('/static', express.static(path.join(__dirname, 'build')));

app.post('/admin', (req, res) => {
    console.log('ADmin post.');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log("App is listening on port: " + port);
