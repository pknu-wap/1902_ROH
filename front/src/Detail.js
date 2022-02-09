import React,{Component} from 'react';
import WCInfo,{Block, Stars} from './template';
import './master.css';

class ToiletInfo extends Component{
  render(){
    console.log(this.props.toilets[this.props.id]);
    const id = this.props.toilets[this.props.id];
    const title = `${id.building}
    ${id.floor}층
    ${id.location ==="center"? "중앙" : "서편"}
    ${id.gender ==="woman"? "여자" : "남자" } 화장실`;
    const description = `
        소변기 : ${id.urinal}
        화변기: ${id.squat}
        좌변기: ${id.toilet}
        장애인용 : ${id.disabled}
        샤워실 :  ${id.shower}
        청결도 : - 점
        혼잡도 : - 점
        `;
      return (
        <div className="toilet_info">
          <WCInfo title={title} description={description} />
          <button className="repair">수리 신고</button>
        </div>
      )
    }
  }

class Reply extends Component{
  _lists(){
    const temp = this.props.toilets[this.props.id].comment.reverse().map((user, index)=>(
        <Block key={user.c_id} name={user.name} password={user.password} cleanliness={user.cleanliness} congestion={user.congestion} description={user.description}/>
    ));
    return (<div>{temp}</div>);
  }
  render(){
    return(
      <div className="reply">
        <Write/>

        {this._lists()}
      </div>
    )
  }
}

//Write 할때 id값에 따라 저장
class Write extends Component{
  state = {
    name:"",
    pw:""
  }
  onNameChange(e){
    this.setState({name: e.target.value});
  }
  onPwChange(e){
    this.setState({pw: e.target.value});
  }
  onSubmitHandler(e){
    e.preventDefault();
    //modify json...?
  }
  
  render(){
    return(
      <div className="box" id="write">
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <p>
            <label> 이름 :
              <input type="text" name="name" placeholder="이름을 입력해주세요." onChange={this.onNameChange.bind(this)} value={this.state.name}/>
            </label>
            <label> 비밀번호 :
              <input type="text" name="pw" placeholder="비밀번호를 입력해주세요" onChange={this.onPwChange.bind(this)} value={this.state.pw}/>
            </label>
          </p>
          <div><span>청결도 : <Stars/></span>
          <span>혼잡도 : <Stars/></span></div>
          <textarea></textarea>
          <p><input type="submit"/></p>
        </form>
    </div>
    );
  }
}
export default ToiletInfo;
export { Reply };
