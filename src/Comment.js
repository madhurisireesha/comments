import './Comment.css'
import {formatDistanceToNow} from 'date-fns'
const Comment=(props)=>{
    const{details,isToggleLike,isDelete,mode}=props
    const{name,comment,id,isLike}=details
    const  ti=formatDistanceToNow(new Date());
    const likeImgurl=isLike?'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png':'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const onClickLike=()=>{
        isToggleLike(id)
    }
    const onDelete=()=>{
        isDelete(id)
    }
    return(
       <div className='bottom'>
        <div className='top'>
            <div className='name'>
            <p className='startletter'>{(name[0].toUpperCase())}</p>
            <p className='username'>{name}</p></div>
            <p className="d">{ti}</p>
         </div>
         <div className='description'>
            <p>{comment}</p>
         </div>
         <div className='below'>
            <div className='start'>
            <button className="like" onClick={onClickLike}><img src={likeImgurl}/></button>
            <p>{mode}</p>
           </div>
           <div>
           <button onClick={onDelete} className="btn1">
               <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className='dusti' alt='delete'/></button>
         </div>
         </div>
        <hr/>
       </div>
    )
}

export default Comment
{/* <div className="total">
        //     <div className='top'>
        //         <p className='startletter'>{(name[0]).toUpperCase()}</p>
        //         <p className='username'>{name}</p>
        //     </div>
        //     <div class="dustbin">
        //         <p className='description'>{comment}</p>
        //         <button onClick={onDelete} className="btn1">
        //         <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className='dusti' alt='delete'/></button>
        //     </div>
        //         <button className="like" onClick={onClickLike}><img src={likeImgurl}/></button>
           
            
            
            
        // </div> */}
