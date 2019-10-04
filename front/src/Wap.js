import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wap.css';

class Wap extends Component{
    render(){
        return(
            <div>
      <Header />
      <Content />
      </div>
        );
    }
}


class Header extends Component{
    render(){
     return(

        <div className = "container">
        <h1>부경대 화장실 찾기</h1>
        <a>-대연캠퍼스-</a>
        </div>

        );
    }
}

class Content extends Component{
    render(){
        return(
           <div id= "img">
           <Marker />
           <Infort />
           </div>
                );
    }
}


class Marker extends Component{
     myFunction(){
        document.getElementById("popup1").style.zIndex="-1";
    }

    render(){

        return(
            <div class = "mark">

          <a id = "marker1" onClick={this.myFunction} >
          <img src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </a>
          <a href = "" id = "marker2" onClick = "javascript:myFunction();" >
              <img src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </a>
          <a href = "" id = "marker3" onClick = "javascript:myFunction();" >
              <img src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </a>
          <a href = "" id = "marker4" onClick = "javascript:myFunction();" >
              <img src = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"/>
          </a>
        </div>
         );
    }
}



class Infort extends Component{
    render(){
        return(

            <div id = "popup1" >
            <Link to="/detail"><p>남자 화장실 갯수 : 총 67개</p></Link>  {/*화장실 별로 하나씩 모두 Link*/}
            <p>여자 화장실 갯수 : 총 개</p>
            <a href = "#">자세히 보기</a>
            </div>


        );
    }
}


export default Wap;
