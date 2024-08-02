const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let equipmentData = []; // This will hold our sensor data

app.post('/data', (req, res) => {
    equipmentData = req.body.data;
    res.send('Data received');
});

app.get('/predict', (req, res) => {
    const pythonProcess = spawn('python', [path.join(__dirname, 'predict.py')]);

    pythonProcess.stdout.on('data', (data) => {
        const predictions = JSON.parse(data.toString());
        res.json(predictions);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
