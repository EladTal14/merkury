import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities } from '../store/actions/appAction'
import { Activity } from './Activity'

export function Activities() {
  const [delayedTasks, setDelayedTasks] = useState(0)
  const activities = useSelector(({ appModule }) => appModule.activities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllActivities())
  }, [])

  useEffect(() => {
  }, [activities])


  return (
    <div className="tasks">
      <div className="header space-between flex" style={{ borderBottom: '1px solid rgba(132, 146, 175, 0.3)' }}>
        <h2>Activities</h2>
        <div className="task-bubbles flex">
          {(delayedTasks > 0) && <div className="bubble">
            <img className="img" src={require('../assets/img/name-bubble.png').default} alt="tasks left" />
            <span className="">{delayedTasks}</span>
          </div>}
          {(activities.length - delayedTasks > 0) && <div className="bubble">
            <img src={require('../assets/img/name-bubble-red.png').default} alt="tasks delayed" />
            <span className="">{activities.length - delayedTasks}</span>
          </div>}
        </div>
      </div>
      {activities.map(activity => <Activity picture={activity.picture} sentAt={activity.sentAt} creator={activity.creator} on={activity.on} action={activity.action} key={activity._id} />)}
    </div>
  )
}

