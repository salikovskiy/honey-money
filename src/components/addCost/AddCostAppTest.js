import React, { Component } from 'react';
import AddCost from './AddCost';

class App extends Component {
  state = {
    balance: 1000,
    products: [
      {
        _id: '5de38a88e25de71c89afb836',
        name: 'Шампанское',
        category: {
          _id: '5de2477969338f285fd33d03',
          name: 'Алкоголь',
          createdAt: '2019-11-30T10:42:01.331Z',
          updatedAt: '2019-11-30T10:42:01.331Z',
          __v: 0,
        },
        createdAt: '2019-12-01T09:40:24.679Z',
        updatedAt: '2019-12-01T09:40:24.679Z',
        __v: 0,
      },
      {
        _id: '5de38a88e25de71c89afb837',
        name: 'Шампунь',
        category: {
          _id: '5de2477969338f285fd33d03',
          name: 'Алкоголь',
          createdAt: '2019-11-30T10:42:01.331Z',
          updatedAt: '2019-11-30T10:42:01.331Z',
          __v: 0,
        },
        createdAt: '2019-12-01T09:40:24.679Z',
        updatedAt: '2019-12-01T09:40:24.679Z',
        __v: 0,
      },
      {
        _id: '5de38a88e25de71c89afb838',
        name: 'Шамбала',
        category: {
          _id: '5de2477969338f285fd33d03',
          name: 'Алкоголь',
          createdAt: '2019-11-30T10:42:01.331Z',
          updatedAt: '2019-11-30T10:42:01.331Z',
          __v: 0,
        },
        createdAt: '2019-12-01T09:40:24.679Z',
        updatedAt: '2019-12-01T09:40:24.679Z',
        __v: 0,
      },
      {
        _id: '5de38a88e25de71c89afb839',
        name: 'Шаман',
        category: {
          _id: '5de2477969338f285fd33d03',
          name: 'Алкоголь',
          createdAt: '2019-11-30T10:42:01.331Z',
          updatedAt: '2019-11-30T10:42:01.331Z',
          __v: 0,
        },
        createdAt: '2019-12-01T09:40:24.679Z',
        updatedAt: '2019-12-01T09:40:24.679Z',
        __v: 0,
      },
    ],
  };

  onGetCost = cost => {
    console.log('Расход--->', cost);
  };
  render() {
    // const dataReg = '2019-11-24T23: 31: 40.086Z';
    // console.log('this.state.products in test', this.state.products);
    return (
      <div>
        <AddCost
          dateRegistration={'2020-01-24T23:31:40.086Z'}
          postCosts={this.onGetCost}
          balance={this.state.balance}
          products={this.state.products}
          token={this.props.token}
        />
      </div>
    );
  }
}

export default App;
