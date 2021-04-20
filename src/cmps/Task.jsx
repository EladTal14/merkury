import { useState, useEffect } from 'react'
import { checkDays } from "../services/appService";

export function Task({ title, timeToSubmit, creator }) {
  const [daysToSubmit, setdaysToSubmit] = useState({ sentence: '', isRed: false })

  useEffect(() => {
    getTime()

  }, [])

  const getTime = () => {
    const daysToSubmit = checkDays(timeToSubmit)
    if (daysToSubmit > 1) setdaysToSubmit({
      ...daysToSubmit, sentence: `${daysToSubmit} days delay`,
      isRed: true
    })
    else if (daysToSubmit < -1) setdaysToSubmit({
      ...daysToSubmit, sentence: `${Math.abs(daysToSubmit)} days left`,
      isRed: false
    })
    else setdaysToSubmit({
      ...daysToSubmit, sentence: `${Math.abs(daysToSubmit)} day ${daysToSubmit > 0 ? 'delay' : 'left'}`,
      isRed: daysToSubmit > 0
    })
  }

  // if (!daysToSubmit) return <div>loading...</div>
  return (
    <div className="task flex">
      <div className="name">
        <span>{creator.charAt(0)}</span>
        <img src={require('../assets/img/name-bubble.png').default} alt="name" />
      </div>
      <div className="content flex column">
        <p>{title}</p>
        <span className={`${daysToSubmit.isRed ? 'red' : ''} flex`}> <img src={require(!daysToSubmit.isRed ? '../assets/img/clock.png' : '../assets/img/clock-red.png').default} alt="clock" />{daysToSubmit.sentence}</span>
      </div>
      <img className="options" src={require('../assets/img/options.png').default} alt="options" />
    </div>
  )
}
