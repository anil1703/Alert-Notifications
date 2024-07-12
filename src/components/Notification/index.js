// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notify">
      <div className="inside-notify">{children}</div>
      <GrFormClose className="icon-size" />
    </div>
  )
}

export default Notification
