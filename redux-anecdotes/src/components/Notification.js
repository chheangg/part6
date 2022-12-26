import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(({notifications}) => notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.map(notif => <div key={notif.id}>{notif.msg}</div>)}
    </div>
  )
}

export default Notification