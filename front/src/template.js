import React, {Component, Fragment} from 'react';
import './master.css';

function WCInfo({title, description}){
  return(
    <div className="info_title">
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  );
}

class Block extends Component{
  render(){
    return (
      <Fragment>
      <div className="box">
      <span>이름 : {this.props.name}</span>
      <span hidden={true}>비밀번호  : {this.props.password}</span>
      <div>
      <span>청결도 : <StarsData rating={this.props.cleanliness}/></span>
      <span>혼잡도 : <StarsData rating={this.props.congestion}/></span>
      </div>
      <p>기타 : {this.props.description}</p>
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
        <span className="star-rating">
          {stars}
        </span>
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
      <span className="star-rating">
        {stars}
      </span>
    );
  }
}
export default WCInfo
export {Block, Stars}
