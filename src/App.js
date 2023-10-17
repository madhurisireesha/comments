import { Component} from "react";
import Comment from './Comment'
import {v4 as uuidv4} from 'uuid'
import './App.css'
const intialCommentList=[
  {
    name:'Sree',
    comment:'Good to see',
    id:uuidv4(),
    isLike:false,
    mode:"Like"
  }
]
class App extends Component{
state={
  commentList:intialCommentList,
    name:'',
    comment:'',
    count:1,
    mode:"Like"
}
onAddName=(event)=>{
  this.setState({
    name:event.target.value
  })}
onAddComment=(event)=>{
  this.setState({
    comment:event.target.value
  })
}
addComment=(event)=>{
  event.preventDefault()
  const{name,comment}=this.state
  const newcomment={
    name,
    comment,
    isLike:false,
  }
  this.setState((prevState)=>({
    commentList:[...prevState.commentList,newcomment],
    count:prevState.count+1,
    name:'',
    comment:''
  }))
  
}
isToggleLike=(id)=>{
  
  this.setState((prevState)=>(
    {
      mode:"Liked"
    },
    {
      commentList:prevState.commentList.map((eachcomment)=>{
        if(id===eachcomment.id){
          return{...eachcomment,isLike:!eachcomment.isLike}
                }
                     
     })}
    
   ))}
   isDelete=(id)=>{
  const {commentList}=this.state
  this.setState({ 
    commentList:commentList.filter(each=>(each.id!==id))

  })
  }
  
render(){  const{name,comment,count}=this.state
   const{commentList}=this.state
   const{mode}=this.state 
   
   return(
    <div className="container">
      <div className="commentcontainer">
        <h1>Comments</h1>
        <p style={{fontWeight:"bold"}}>Say something about you</p>
        <form className="formcontainer" onSubmit={this.addComment}>
          <div className="innercontainer">
          <input type="text" value={name} onChange={this.onAddName} placeholder="Your Name"/>
          <textarea rows="5" cols="50" value={comment} placeholder="Your Comment" onChange={this.onAddComment}/>
          <button type="submit" className="commentbtn">Add Comment</button>
          </div>
          <div>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" className="commentimg" alt="pictures"/>
          </div>
        </form>
        <hr/>
      </div>
      <div className='numcount'>  <p className="count">{count} </p><p> Comments</p></div>
      {commentList.map((getdetails)=>(
      <Comment details={getdetails} count={count} isToggleLike={this.isToggleLike} isDelete={this.isDelete} mode={mode}/>
       ))}
      <div className="bottom">

      </div>
          
         
          

    </div>

   )
   
  
}}
export default App


