import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/predict')
            .then(response => setPredictions(response.data))
            .catch(error => console.error(error));
    }, []);

    const chartData = {
        labels: predictions.map(prediction => prediction.id),
        datasets: [{
            label: 'Equipment Status',
            data: predictions.map(prediction => prediction.status === 'FAILURE PREDICTED' ? 1 : 0),
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
        }]
    };

    return (
        <div>
            <h1>Predictive Maintenance Dashboard</h1>
            <Line data={chartData} />
        </div>
    );
};

export default Dashboard;

