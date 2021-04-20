import { useState, useEffect } from 'react'
import { getTime } from "../services/appService";

export function Activity({ action, on, sentAt, creator, picture, idx }) {
  const [isRead, setIsRead] = useState(idx > 1)


  useEffect(() => {

  }, [])
  return (
    <div className="activity flex" >
      <div className="face">
        <img src={require(`../assets/img/people/${picture}`).default} alt="face" />
        <div className="line"></div>
      </div>
      <div className="content flex column">
        <div className="flex">
          <span className="creator">{creator} 	&nbsp;</span>
          <span className="sentence"> {action} <span className="on">{on}</span></span>
        </div>
        <div className="container flex">
          <img src={require('../assets/img/clock.png').default} alt="clock" />
          <span className="sent-at flex">{getTime(sentAt)}</span>
        </div>
      </div>
    </div>
  )
}
