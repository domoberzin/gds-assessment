const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/v1/add', (req, res) => {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.send({ result: a + b });
});

app.post('/api/v1/subtract', (req, res) => {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.send({ result: a - b });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;