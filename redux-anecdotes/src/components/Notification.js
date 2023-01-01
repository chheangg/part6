import { connect } from "react-redux"

const Notification = ({notification}) => {
  // const notification = useSelector(({notification}) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = ({notification}) => {
  return {
    notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification