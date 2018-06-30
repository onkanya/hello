import React, { Component } from 'react';
import logo from './logo.svg';
import SayHello from './components/SayHello';
import Border from './components/Border';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Onkanya Wongrakthai",
      age: 22
    }
  }

  incrementAge(){
    this.setState({age: this.state.age + 10});
  }
  decrementAge(){
    this.setState({age: this.state.age - 1});
  }
  render() {
    return (
      <div className="App">
      <SayHello name={this.state.name} age={this.state.age} />
      <p>Age, {this.state.age}</p>
      <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       <Border>
       <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>{"  "}
       <button onClick={() => this.decrementAge()}>ลดอายุ</button>
       </Border>      
      
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
