import React, { Component } from 'react';
import wc from './wc.svg';
import './master.css';

class Loading extends Component{
  state = {
    percent : 100,
    increase: true
  }

  componentDidMount(){
    const intervalId = setInterval(() => this._changeColor(),200);
    this.setState({ intervalId });
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
    }

  //gray -> blue
  _changeColor = () =>{
      this.setState({
      percent : this.state.percent===0 ? 100 : this.state.percent - 10
      })
  }
  //gray -> blue -> gray
  _changeColor2 = () =>{
      if(this.state.percent%100===0)
        this.setState({
        increase : !this.state.increase
        })
      this.setState({
      percent : this.state.increase ? this.state.percent + 10 : this.state.percent - 10
      })
  }

  render(){
    const filters = {filter: 'grayscale('+this.state.percent+'%)'};
    return (
        <img src={wc} style={filters} className="loading" alt="loading" />
    );
  }
}
export default Loading;
