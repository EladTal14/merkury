import { useState, useEffect } from 'react'
import { getTime } from "../services/appService";

export function Message({ message, sentAt, creator, picture, idx, setUnseenMessages }) {
  const [isRead, setIsRead] = useState(idx > 1)


  useEffect(() => {

  }, [])
  const readMessage = () => {
    if (isRead) setUnseenMessages(prevUnseenMessages => prevUnseenMessages + 1)
    else setUnseenMessages(prevUnseenMessages => prevUnseenMessages - 1)

    setIsRead(!isRead)
  }

  // if (!daysToSubmit) return <div>loading...</div>
  return (
    <div className={`${isRead ? "" : "unread"} message flex`} onClick={readMessage}>
      <div className="face">
        <img src={require(`../assets/img/people/${picture}`).default} alt="face" />
      </div>
      <div className="content flex column">
        <div className="flex">
          <span className="creator">{creator}</span>
          <span className="sent-at">{getTime(sentAt)}</span>
        </div>
        <p className="sentence">{message}</p>
        <div className="actions flex">
          <img src={require('../assets/img/go-back.png').default} alt="go back" />
          <img src={require('../assets/img/wheel.png').default} alt="wheel" />
        </div>
      </div>
    </div>
  )
}
