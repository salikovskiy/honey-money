import React, { Component } from 'react';
import AddCost from './AddCost';

class App extends Component {
  state = {
    balance: 1000,
  };

  onGetCost = cost => {
    console.log('Расход--->', cost);
  };
  render() {
    return (
      <div>
        <AddCost
          dateRegistration={new Date(2019, 0, 5)}
          getCost={this.onGetCost}
          balance={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
