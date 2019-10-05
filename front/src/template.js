import React, {Component, Fragment} from 'react';
import './master.css';

function WCInfo({title, description}){
  return(
    <Fragment>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </Fragment>
  );
}

class Block extends Component{
  render(){
    return (
      <Fragment>
      <div className="box">
      <span>이름 : {this.props.name}</span>
      <span hidden={true}>비밀번호  : {this.props.password}</span>
      <div>청결도 : <StarsData rating={this.props.cleanliness}/></div>
      <div>혼잡도 : <StarsData rating={this.props.congestion}/></div>
      <p>기타</p>
      <button>삭제</button>
      </div>
      </Fragment>
    );
  }
}
class Stars extends Component{
    constructor(props){
      super(props);
      this.state = {
        rating : props.rating || null,
      }
    }
    rate(rating) {
      this.setState({
        rating : rating
      });
    }
    render() {
      var stars = [];

      for(var i = 0; i < 5; i++) {
        var klass = 'star-rating__star';

        if (this.state.rating >= i && this.state.rating != null) {
          klass += ' is-selected';
        }
        stars.push(
          <label
            key={i}
            className={klass}
            onClick={this.rate.bind(this, i)}
            >
            ★
          </label>
        );
      }

      return (
        <div className="star-rating">
          {stars}
        </div>
      );
    }
}
class StarsData  extends Component{
  constructor(props){
    super(props);
    this.state = {
      rating : props.rating || null,
    }
  }
  render() {
    var stars = [];

    for(var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }
      stars.push(
        <label key={i} className={klass}>
          ★
        </label>
      );
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}
export default WCInfo
export {Block, Stars}
