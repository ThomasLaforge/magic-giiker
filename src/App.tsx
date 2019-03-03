import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as GiiKER from 'giiker'

interface IProps {

}
interface IState {
  giiker: any
}

class App extends Component<IProps, IState> {

  constructor(props: any){
    super(props)
    this.state = {
      giiker: null
    }
  }

  connect = async () => {
    const giiker = await GiiKER.connect();
    giiker.on('move', (move: any) => {
        console.log(move.face); //=> "F"
        console.log(move.amount); //=> -1
        console.log(move.notation); //=> "F'"
    });
    this.setState({ giiker })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.connect}>Connect</button>
      </div>
    );
  }
}

export default App;
