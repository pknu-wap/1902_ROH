import React,{Component, Fragment} from 'react';
import WCInfo,{Block, Stars} from './template';
import './master.css';

class Detail extends Component{
  state = {
   name:'KD',
   password:'HKD',
   user:[
     {
       id : 0,
       name : "first",
       password: "first",
       cleanliness : 4,
       congestion : 2
     },
     {
       id : 1,
       name : "second",
       password: "second",
       cleanliness : 1,
       congestion : 4
     },
     {
       id : 3,
       name : "third",
       password: "third",
       cleanliness : 3,
       congestion : 5
     },
   ]
 }
 _makeList(){
   const lists = this.state.user.map((user)=>(
    <li key={user.id}> name : {user.name}, pw : {user.password}, cleanliness : {user.cleanliness} congestion : {user.congestion}</li>
  ));
   console.log(lists);
   return (
     <ul>
     {lists}
     </ul>
   );
 }
_lists(){
  const temp = this.state.user.reverse().map((user)=>(
    <Block name={user.name} password={user.password} cleanliness={user.cleanliness} congestion={user.congestion}/>
  ));
  return (<div>{temp}</div>);
}

  render(){
    return (
      <Fragment>
      <WCInfo title={"title"} description={"description"} />
      <button>신고</button>
      <Write/>
      댓글
      {this._lists()}
      </Fragment>
    )
  }
}

class Write extends Component{
  state={
    name:"",
    pw:""
  }
  render(){
    return(
      <div className="box">
        <form>
          <p>
            <label> 이름 :
              <input type="text" name="name" placeHolder="이름을 입력해주세요." value={this.state.name}/>
            </label>
            <label> 비밀번호 :
              <input type="text" name="pw" placeHolder="비밀번호를 입력해주세요" value={this.state.pw}/>
            </label>
          </p>
          <p>청결도 : <Stars/></p>
          <p>혼잡도 : <Stars/></p>
          <textarea></textarea>
          <p><input type="submit"/></p>
        </form>
    </div>
    );
  }
}
export default Detail;
