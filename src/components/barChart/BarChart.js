// import React, { Component } from 'react';
// import { Bar } from 'react-chartjs-2';
// import styles from './BarChart.module.css';

// class BarChart extends Component {
//   constructor(props) {
//     super(props);
//     props.data.sort((a, b) => (a.amount < b.amount ? 1 : -1));
//     // console.log("PROPSLABLES",props.labels)
//     console.log('props :', props);
//     this.chartReference = React.createRef();
//     this.data = {
//       labels: props.data.map(elem => elem.name),
//       datasets: [
//         {
//           label: props.selectedCategory,
//           backgroundColor: '#fc822c',
//           borderColor: '#fc822c',
//           borderWidth: 1,
//           hoverBackgroundColor: '#fedac2',
//           hoverBorderColor: '#fedac2',
//           data: props.data.map(elem => elem.amount),
//         },
//       ],
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('this.props :', this.props);
//     console.log('prevProps :', prevProps);
//   }

//   render() {
//     return (
//       <div className={styles.barContainer}>
//         <Bar
//           ref={this.chartReference}
//           data={this.data}
//           width={10}
//           height={5}
//           options={{ maintainAspectRatio: false }}
//         />
//       </div>
//     );
//   }
// }

// export default BarChart;

//--------------- enw ---------

import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.css';
const sortData = data => {
  console.log('sort :', data);
  if (data.length) {
    return data.sort((a, b) => (a.amount < b.amount ? 1 : -1));
  }
};

class BarChart extends Component {
  state = {
    innerData: this.props.data,
    chartReference: React.createRef(),
    isRender: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('this.props :', this.props);
    console.log('prevProps :', prevProps);

    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      const data = this.props.data.filter(
        elem => elem.name === this.props.selectedCategory,
      );
      this.setState({
        innerData: data,
        isRender: true,
      });
      console.log(data);
    }
  }

  render() {
    console.log('innerDat', this.state.innerData);
    return (
      <div className={styles.barContainer}>
        <Bar
          ref={this.state.chartReference}
          data={{
            labels: sortData(this.state.innerData).map(elem => elem.name),
            datasets: [
              {
                label: this.props.selectedCategory,
                backgroundColor: '#fc822c',
                borderColor: '#fc822c',
                borderWidth: 1,
                hoverBackgroundColor: '#fedac2',
                hoverBorderColor: '#fedac2',
                data: sortData(this.state.innerData).map(elem => elem.amount),
              },
            ],
          }}
          width={10}
          height={5}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default BarChart;
