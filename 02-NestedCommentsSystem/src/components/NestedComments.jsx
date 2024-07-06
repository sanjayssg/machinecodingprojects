import { useState } from 'react';
import './styles.css';
import useCommentTree from '../hooks/useCommentTree';
import Comment from './Comment';

const NestedComments = ({
  comments,
  onSubmit=()=>{},
  onEdit=()=>{},
  onDelete=()=>{},
}) => {
  const [comment, setComment] = useState("");
  const { 
    comments: commentsData, 
    insertComment, 
    editComment,
    deleteComment,
  } = useCommentTree(comments)

  const handleChange = (e) =>{
    setComment(e.target.value)
  }

  const handleSubmit = () =>{
    if(comment){
      handleReply(undefined, comment);
      setComment("");
    }
  }

  const handleReply =(commentId, content) =>{
    insertComment(commentId, content);
    onSubmit(content);
  }

  const handleEdit =(commentId, content) =>{
    editComment(commentId, content);
    onEdit(content);
  }

  const handleDelete =(commentId) =>{
    deleteComment(commentId);
    onDelete(commentId);
  }


  return (
    <>
      <div className='add-comment'>
        <textarea 
        onChange={handleChange}
        value={comment}
        className='comment-textarea'
        cols={50} 
        rows={3} 
        placeholder='Add a new comment....'/>
        <button onClick={handleSubmit} className='comment-button'>
          Add Comment
        </button>
      </div>
      {commentsData.map((comment)=>(
        <Comment 
        comment={comment} 
        key={comment.id}
        onSubmitComment={handleReply}
        onEditComment={handleEdit}
        onDeleteComment={handleDelete}
        />
      ))}
    </>
  )
}

export default NestedComments