import React, { Component } from 'react';
import './App.css';
import AddIncome from './AddIncome';

class App extends Component {
  state = { isModalOpen: false, incomeInput: '', value: '' };
  openModalIncome = e => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  /*  closeModalIncome = () => {
    this.setState({ isModalOpen: false });
  }; */

  getIncome = inc => {
    console.log('Income', inc);
  };

  render() {
    return (
      <>
        <h1>HONEY MONEY APP</h1>
        <button onClick={this.openModalIncome}>show modal</button>
        {this.state.isModalOpen && (
          <AddIncome
            income={this.getIncome}
            closeModal={this.openModalIncome}
          />
        )}
      </>
    );
  }
}

export default App;

// const App = () => {
//   /* const route = useRoute(true);
//   return route; */
//   return (
//     <>
//       <h1>HONEY MONEY APP</h1>
//       <button>show modal</button>
//       <AddCost />;
//     </>
//   );
// };

// export default App;
