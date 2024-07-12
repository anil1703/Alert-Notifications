// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotificatios = () => {
  const success = () => {
    return (
      <Notification>
        <AiFillCheckCircle className="icon-size success" />
        <div>
          <h1 className="success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
    )
  }
  const error = () => {
    return (
      <Notification>
        <RiErrorWarningFill className="icon-size error" />
        <div>
          <h1 className="error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
    )
  }
  const warning = () => {
    return (
      <Notification>
        <MdWarning className="icon-size warning" />
        <div>
          <h1 className="warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>
    )
  }
  const info = () => {
    return (
      <Notification>
        <MdInfo className="icon-size info" />
        <div>
          <h1 className="info">Info</h1>
          <p>Anyone on the Internet can view these files</p>
        </div>
      </Notification>
    )
  }
  return (
    <div className="home">
      <h1>Alert Notifications</h1>
      {success()}
      {error()}
      {warning()}
      {info()}
    </div>
  )
}

export default AlertNotificatios
