import { useCallback, useState } from "react";
import Notification from '../components/Notification'


const useToast = (position = "top-right") => {
    const [notification, setNotification] = useState(null);
    let timer ;
    const triggerNotification = useCallback((notificationProps)=>{
        clearTimeout(timer);  
        setNotification(notificationProps) 
        timer = setTimeout(() => {
            setNotification(null)
        }, notificationProps.duration);
    }, [])
    const handleClose = () =>{
        setNotification(null);
    }
    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <Notification 
                {...notification}
                onClose={handleClose}
            />
        </div>
    ) : null

return {
    triggerNotification,
    NotificationComponent
}
};

export default useToast