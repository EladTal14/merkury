import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllTasks } from '../store/actions/appAction'
import { checkDays } from '../services/appService'
import { Task } from './Task'

export function Tasks() {
  const [delayedTasks, setDelayedTasks] = useState(0)
  const tasks = useSelector(({ appModule }) => appModule.tasks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTasks())
  }, [])

  useEffect(() => {
    countDelayedTasks()
  }, [tasks])


  const countDelayedTasks = () => {
    let delayedtasks = 0
    tasks.forEach((task, idx) => {
      if (checkDays(task.timeToSubmit) > 1) delayedtasks++
    })
    setDelayedTasks(delayedtasks)
  }

  return (
    <div className="tasks">
      <div className="header space-between flex">
        <h2>Tasks</h2>
        <div className="task-bubbles flex">
          {(delayedTasks > 0) && <div className="bubble">
            <img src={require('../assets/img/name-bubble.png').default} alt="tasks left" />
            <span >{delayedTasks}</span>
          </div>}
          {(tasks.length - delayedTasks > 0) && <div className="bubble">
            <img src={require('../assets/img/name-bubble-red.png').default} alt="tasks delayed" />
            <span >{tasks.length - delayedTasks}</span>
          </div>}
        </div>
      </div>
      {tasks.map(task => <Task timeToSubmit={task.timeToSubmit} creator={task.creator} title={task.title} key={task._id} />)}
    </div>
  )
}
