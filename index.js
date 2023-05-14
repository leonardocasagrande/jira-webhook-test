const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    console.log(req.body);
    res.send('Hello World');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})