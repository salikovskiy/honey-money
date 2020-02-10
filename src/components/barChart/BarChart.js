import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    // console.log("PROPSLABLES",props.labels)
    this.chartReference = React.createRef();
    this.data = {
      labels: props.labels,
      datasets: [
        {
          label: 'Label',
          backgroundColor: '#fc822c',
          borderColor: '#fc822c',
          borderWidth: 1,
          hoverBackgroundColor: '#fedac2',
          hoverBorderColor: '#fedac2',
          data: props.data,
        },
      ],
    };
  }

  componentDidMount() {
    // console.log(this.chartReference.current); // returns a Chart.js instance reference
  }

  render() {
    return (
      <div
        style={{
          width: '688px',
          height: '350px',
          margin: '0 auto',
          boxShadow: '7px 12.124px 20px 0px rgba(179, 185, 200, 0.4)',
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: '20px',
          padding: '10px',
          marginBottom: '40px',
        }}
      >
        <Bar
          ref={this.chartReference}
          data={this.data}
          width={10}
          height={5}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default BarChart;
