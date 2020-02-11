import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    // console.log("PROPSLABLES",props.labels)
    console.log('props :', props);
    this.chartReference = React.createRef();
    this.data = {
      labels: props.labels,
      datasets: [
        {
          label: props.selectedCategory,
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
    // console.log('this.props.dataghgfhfhfghfghgfh :', this.props.data);
    // this.data.datasets[0].data = this.props.data.map(el => el.name);
    // this.data.datasets[0].data = this.props.data.map(el => el.amount);
    // console.log('this.data.datasets.data', this.data.datasets.data);
    // this.data.labels = this.props.data.map(el => el.name);
    // this.data.datasets.label = this.props.selectedCategory;
    // // this.data.datasets.label = this.props.data.map(el => el.name);
    // this.data.datasets.data = this.props.data.map(el => el.amount);
  }

  componentDidUpdate() {
    this.data.labels = this.props.data.map(el => el.name);
    this.data.datasets.label = this.props.selectedCategory;
    // this.data.datasets.label = this.props.data.map(el => el.name);
    this.data.datasets.data = this.props.data.map(el => +el.amount);
    // console.log('this.datammmmmmmmmmmmmmmmmmm :', this.data);
  }

  render() {
    // console.log('this.props.datammmmmmmmmmmm :', this.props.data);
    // console.log('this.props.data :', this.props.data);
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
