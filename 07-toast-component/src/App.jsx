import useToast from './hooks/useToast';


function App() {
  const { NotificationComponent, triggerNotification } = useToast("top-right")

  return (
    <div>
      <h1> Toast Component</h1>
      <button onClick={()=> triggerNotification({
        duration: 3000,
        type: "success",
        message: "This is a success notification!"
      })}>Trigger Success</button>
      <button onClick={()=> triggerNotification({
        duration: 3000,
        type: "error",
        message: "This is a Error notification!"
      })}>Trigger Error</button>
      <button onClick={()=> triggerNotification({
        duration: 3000,
        type: "info",
        message: "This is a Info notification!"
      })}>Trigger Info</button>
      <button onClick={()=> triggerNotification({
        duration: 3000,
        type: "warning",
        message: "This is a Warning notification!"
      })}>Trigger Warning</button>
      {NotificationComponent}
    </div>
  )
}

export default App
