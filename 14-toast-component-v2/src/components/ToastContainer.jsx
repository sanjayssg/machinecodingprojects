import { useEffect, useRef, useState } from "react"
import Toast from "./Toast";

const ToastContainer = () => {
    const [toasts, setToasts] = useState([]);
    const timerRef = useRef({});

    const handleClose = (id) =>{
        clearTimeout(timerRef.current[id]);
        delete timerRef.current[id];
        setToasts((prevToast)=>{
            const filteredArr = prevToast.filter(toast => toast.id !== id);
           return filteredArr;
        }
    );
    }

    const handleClick = (message, type) =>{
        const id = new Date().getTime();
        const newToasts = [...toasts, {id,message, type}];
        setToasts(newToasts);
        timerRef.current[id] = setTimeout(()=>handleClose(id), 3000);
    }

    useEffect(()=>{
        return ()=>{
            toasts.forEach(toast=>clearTimeout(timerRef.current[toast.id]));
        }
    },[]);

  return (
    <div className="container">
        <div className="toast-container">
            {
                toasts.map(({id, message, type}) =>(
                    <Toast handleClose={()=>handleClose(id)} key={id} message={message} type={type}/>
                ))    
            }
        </div>
        <div className="btn-container">
            <button onClick={()=>handleClick("Success Alert","success")}>Success Toast</button>
            <button onClick={()=>handleClick("Info Alert","info")}>Info Toast</button>
            <button onClick={()=>handleClick("Warning Alert","warning")}>Warning Toast</button>
            <button onClick={()=>handleClick("Error Alert","error")}>Error Toast</button>
        </div>
    </div>
  )
}

export default ToastContainer