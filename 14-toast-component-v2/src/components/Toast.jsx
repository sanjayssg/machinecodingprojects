
const Toast = ({message, handleClose, type}) => {
  return (
    <div className={`toast ${type}`}>
        {message}
        <span onClick={handleClose}>x</span>
    </div>
  )
}

export default Toast