const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello from Node.js');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
