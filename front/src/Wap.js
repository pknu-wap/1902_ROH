import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './master.css';

class Map extends Component{
  render(){
    const toggles = this.props.bldgs.map((bldg, index)=>{
      return (
        <Toggle key={index}
        building={bldg.building}
        marker_top={bldg.marker_top}
        marker_left={bldg.marker_left}
        popup_top={bldg.popup_top}
        popup_left={bldg.popup_left}
          />
        )
    })
    return(
      <div className="map">
        <div id= "img">
          {toggles}
        </div>
      </div>
    );
  }
}

class Marker extends Component{
    render(){
      const styles = {
        top : this.props.marker_top + "px",
        left : this.props.marker_left + "px",
      };
      return(
        <div className = "marker" style={styles}>
          <p >
          <img alt="marker" src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </p>
        </div>
      );
    }
}

class Infort extends Component{
    render(){
      const styles = {
        top : this.props.popup_top + "px",
        left : this.props.popup_left + "px"
        };
        return(
          <div  >
            <div className ="popup" id={this.props.popup_left > this.props.marker_left? "right" :"left"} style={styles}>
            <Link to="/detail"><p>1층 중앙 남자 화장실</p></Link>
            </div>
          </div>
        );
    }
}

class Toggle extends Component{
  state={
    hidden : true,
  }
  _clickHandler=()=>{
    this.setState({
      hidden: !this.state.hidden
    });
  }
  render(){
    return (
      <div onClick={this._clickHandler}>
        <Marker marker_top={this.props.marker_top} marker_left={this.props.marker_left}/>
        { this.state.hidden ? null : <Infort popup_top={this.props.popup_top} popup_left={this.props.popup_left}  marker_left={this.props.marker_left}/>  }
      </div>
    )
  }
}

export default Map;
