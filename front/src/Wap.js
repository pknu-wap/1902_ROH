import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wap.css';

class Content extends Component{
    render(){
        return(
          <div className = "body">
           <div id= "img">
            <Toggle id="1" />
            <Toggle id="2" />
            <Toggle id="3" />
            <Toggle id="4" />
            {/*Toggle 컴포넌트로 id 값을 주어서 마커와 Infort 하나씩 생성*/}
           </div>
           </div>
         );
    }
}

class Marker extends Component{
    render(){
      return(
        <div className = "mark">
          <p id = {this.props.id}>
          <img alt="marker" src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </p>
          <p id = {this.props.id}>
          <img alt = "marker"  src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </p>
        </div>
      );
    }
}

class Infort extends Component{
    render(){
        return(
            <div id = {this.props.id}>
            <Link to="/detail"><p>1층 중앙 남자 화장실</p></Link>
            <Link to="/detail"><p>1층 중앙 남자 화장실</p></Link>
            <Link to="/detail"><p>1층 중앙 남자 화장실</p></Link>
            <Link to="/detail"><p>1층 중앙 남자 화장실</p></Link>
            {/*
              나중에
              <Link to="/detail/화장실_id값"><p>{층}층 {위치} {남/여} 화장실</p></Link>
            */}
            </div>
        );
    }
}

class Toggle extends Component{
  constructor(props){
    super(props);
    this.state={
      hidden : false,
      marker_id : "marker" + this.props.id,
      popup_id : "popup" + this.props.id
    }
  }
  _clickHandler=()=>{
    this.setState({
      hidden: !this.state.hidden
    });
  }
  render(){
    console.log(this.state.marker_id, this.state.popup_id);
    return (
      <div onClick={this._clickHandler}>
        <Marker id={this.state.marker_id}/>
        { this.state.hidden ? null : <Infort id={this.state.popup_id}/>  }
      </div>
    )
  }
}

export default Content;
