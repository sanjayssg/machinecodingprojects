import { useState } from 'react'

const Comment = ({
  comment = {}, 
  onSubmitComment = () => {},
  onEditComment = () => {},
  onDeleteComment = () => {},
}) => {
  const [expand, setExpand] = useState(false);  
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);


  const handleChange = (e) =>{
    if(editMode){
      setEditedContent(e.target.value) 
    } else setReplyContent(e.target.value)
  }

  const handleReplySubmit = () =>{
    if(replyContent){
      onSubmitComment(comment.id, replyContent)
      setReplyContent("");
    }
  }

 const handleEditSubmit =()=>{
     onEditComment(comment.id, editedContent)
     setEditMode(false);
 }

  function toggleExpand() {
    setExpand(!expand);
  }

  function toggleEditMode() {
    setEditMode(!editMode);
    setEditedContent(comment.content);
  }

  return (
    <div className='comment'>
      {!editMode ?
        <>
          <p className='comment-content'>{comment.content}</p>
          <p className='comment-info'>Votes: {comment.votes}</p>
          <p className='comment-info'>{new Date(comment.timestamp).toLocaleString()}</p>
        </>
        :
        (<div className='add-comment'>
          <textarea 
            onChange={handleChange}
            value={editedContent}
            className='comment-textarea'
            cols={50} 
            rows={3} 
            />
          <button  className='comment-button' onClick={handleEditSubmit}>
            Save Edit
          </button>
          <button onClick={toggleEditMode} className='comment-button'>
            Cancel Edit
          </button>
      </div>)
      }
        <div className='comment-actions'>
          <button className='comment-button' onClick={toggleExpand}>{expand ? 'Hide Reply': 'Reply'}</button>
          <button className='comment-button' onClick={toggleEditMode}>Edit</button>
          <button className='comment-button' onClick={()=> onDeleteComment(comment.id)}>Delete</button>
        </div>

        {expand && 
          <div className='comment-replies'>
            <div className='add-comment'>
              <textarea 
              onChange={handleChange}
              value={replyContent}
              className='comment-textarea'
              cols={50} 
              rows={3} 
              placeholder='Add a new comment....'/>
              <button onClick={handleReplySubmit} className='comment-button'>
                Add Comment
              </button>
            </div>
            {comment?.replies?.map((reply)=>(
              <Comment 
              key={reply.id}
              comment={reply}
              onSubmitComment={onSubmitComment}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
              />
            ))}
          </div>
        }
    </div>
  )
}

export default Comment