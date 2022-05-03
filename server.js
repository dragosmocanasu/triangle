const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

let firstSide = secondSide = thirdSide = 0;
let result = "";

app.use(bodyParser.json());

app.post('/api/triangle', (req, res) => {
    firstSide = req.body.sides.firstSide;
    secondSide = req.body.sides.secondSide;
    thirdSide = req.body.sides.thirdSide;

    if (firstSide == null || secondSide == null || thirdSide == null) 
        result = "Neither";
        else {
            if (firstSide == secondSide && secondSide == thirdSide)
                result = "Equilateral"; 
            else if (firstSide == secondSide || secondSide == thirdSide || thirdSide == firstSide)
                result = "Isosceles";
            else result = "Scalene";
        }

    res.json(result);
});

app.get('/', (req,res) => {
    res.send('Running...');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});