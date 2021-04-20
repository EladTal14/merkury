import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllMessages } from '../store/actions/appAction'
import { Message } from './Message'

export function Messages() {
  const [unseenMessages, setUnseenMessages] = useState(2)
  const messages = useSelector(({ appModule }) => appModule.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMessages())
  }, [])

  useEffect(() => {

  }, [messages])




  return (
    <div className="tasks">
      <div className="header space-between flex">
        <h2>Messages</h2>
        <div className="task-bubbles flex">
          {(unseenMessages > 0) && <div className="bubble">
            <img className="img" src={require('../assets/img/name-bubble.png').default} alt="tasks left" />
            <span className="">{unseenMessages}</span>
          </div>}
          {(messages.length - unseenMessages > 0) && <div className="bubble">
            <img src={require('../assets/img/name-bubble-red.png').default} alt="tasks delayed" />
            <span className="">{messages.length - unseenMessages}</span>
          </div>}
        </div>
      </div>
      {messages.map((message, idx) => <Message setUnseenMessages={setUnseenMessages} idx={idx} picture={message.picture} sentAt={message.sentAt} creator={message.creator} message={message.message} key={message._id} />)}
    </div>
  )
}

