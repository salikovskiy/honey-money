import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      const res = this.props.costs
        .filter(
          elem => elem.product.category.name === this.props.selectedCategory,
        )
        .reduce(
          (acc, el) => [...acc, { name: el.product.name, amount: el.amount }],
          [],
        );

      console.log(res);
      this.setState({
        innerData: sortData(res),
        isRender: true,
      });
    }
  }

  render() {
    console.log('innerDat', this.state.innerData);
    return (
      <div className={styles.barContainer}>
        <Bar
          ref={this.state.chartReference}
          data={{
            labels: this.state.innerData.map(elem => elem.name),
            datasets: [
              {
                label: this.props.selectedCategory,
                backgroundColor: '#fc822c',
                borderColor: '#fc822c',
                borderWidth: 1,
                hoverBackgroundColor: '#fedac2',
                hoverBorderColor: '#fedac2',
                data: this.state.innerData.map(elem => elem.amount),
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

const MSTP = state => ({ costs: state.finance.costs });

export default connect(MSTP)(BarChart);
