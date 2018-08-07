import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        addString :''
    };
  };

  changeState =(num) =>{
    console.log("addone is clicked");
    this.setState({
      addString: this.state.addString+num
    })
    console.log(this.state.addString); 
  }
  clear = () =>{
    this.setState({
      addString:''
    })
  }
  solve =(input) => {
    
    
    const exp = input;
    console.log(exp);
    let result = 0;

    if(exp.indexOf('.')>-1){
        if(exp.indexOf('+') > -1){
           const exp1 = parseFloat(exp.split('+')[0],10);
           const exp2 = parseFloat(exp.split('+')[1],10);
           result = exp1+exp2;
           return result;
        }
        else if(exp.indexOf('-') > -1){
           const exp1 = parseFloat(exp.split('-')[0],10);
           const exp2 = parseFloat(exp.split('-')[1],10);
           result = exp1 - exp2;
           return result;
        }
        else if(exp.indexOf('*')> -1){
           const exp1 = parseFloat(exp.split('*')[0],10);
           const exp2 = parseFloat(exp.split('*')[1],10);
           result = exp1 * exp2;

           return result;
        }
        else if(exp.indexOf('/')> -1){
           const exp1 = parseFloat(exp.split('/')[0],10);
           const exp2 = parseFloat(exp.split('/')[1],10);
           result = exp1 / exp2;

           return result;
        }
       
       //  return (result);
      }
   else if(exp.indexOf('+') > -1) {
      const exp1 = parseInt(exp.split('+')[0],10);
      const exp2 = parseInt(exp.split('+')[1],10);
      result = exp1 + exp2;
    }
    else if(exp.indexOf('-') > -1) {
      const exp1 = parseInt(exp.split('-')[0],10);
      const exp2 = parseInt(exp.split('-')[1],10);
      result = exp1 - exp2;
    }
     else if(exp.indexOf('*')> -1) {
      const exp1 = parseInt(exp.split('*')[0],10);
      const exp2 = parseInt(exp.split('*')[1],10);
      result = exp1 * exp2;
    }
    else if(exp.indexOf('/')> -1) {
      const exp1 = parseInt(exp.split('/')[0],10);
      const exp2 = parseInt(exp.split('/')[1],10);
      result = exp1 / exp2;
    }
    
   //  console.log("solve result is ",result);
    return result;
}


  result = () => {
    var result  = this.state.addString;
    result = this.solve(result);
    console.log(result);
    this.setState({
      addString:result
    })
  }
 
  render() {
    
    return (
    
    <div className = "calculator" >
    <div className = "top" >
        <div className ="keys">
        <button onClick = {this.clear} id = "clear">C</button>
        <div id = "screen">{this.state.addString}</div>
        </div>
        <div className = "top">
        <div className = "keys">
          <button onClick = {() => this.changeState(1)}> 1 </button>
          <button onClick = {() => this.changeState(2)}>2 </button>
          <button onClick = {() => this.changeState(3)}>3 </button>
          <button onClick = {() => this.changeState('+')} className="keys">+</button>
          </div>
          <div className = "keys">
          <button onClick = {() => this.changeState(4)} >4</button>
          <button onClick = {() => this.changeState(5)}>5</button>
          <button onClick = {() => this.changeState(6)}>6</button>
          <button onClick = {() => this.changeState('-')} className = "operator">-</button>
          </div>
          <div className = "keys">
          <button onClick = {() => this.changeState('7')}>7</button>
          <button onClick = {() => this.changeState('8')}>8</button>
          <button onClick = {() => this.changeState('9')}>9</button>
          <button onClick = {() => this.changeState('/')} className = "operator" >÷</button>
          </div>
          <div className = "keys">
          <button onClick = {() => this.changeState(0)} >0</button>
          <button onClick = {() => this.changeState('.')} >.</button>
          <button  onClick = {this.result} className ="eval">=</button>
          <button onClick = {() => this.changeState('*')} className="operator">x</button>
          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
