import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.data = {
        labels: props.labels,
        datasets: [
          {
            label: "Label",
            backgroundColor: '#fc822c',
            borderColor: '#fc822c',
            borderWidth: 1,
            hoverBackgroundColor: '#fedac2',
            hoverBorderColor: '#fedac2',
            data: props.data
          },
        ],
      };
  }

  componentDidMount() {
    console.log(this.chartReference.current); // returns a Chart.js instance reference
  }

  render() {
    return (
      <>
      <div style={{width: 500, height: 200}}>
        <Bar
          ref={this.chartReference}
          data={this.data}
          width={10}
          height={5}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      </>
    );
  }
}

export default BarChart;
