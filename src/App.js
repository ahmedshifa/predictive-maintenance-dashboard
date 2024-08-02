import React from 'react';
import './App.css';
import MyChart from './MyChart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'category',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
  },
};

const App = () => {
  return (
    <div className="App">
      <MyChart data={data} options={options} />
    </div>
  );
};

export default App;
