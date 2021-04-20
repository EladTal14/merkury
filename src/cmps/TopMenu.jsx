import { useDispatch, useSelector } from 'react-redux'
import { updateShowMenu } from '../store/actions/appAction'

export const TopMenu = () => {
  const showMenu = useSelector(({ appModule }) => appModule.showMenu)
  const dispatch = useDispatch()
  const openMenu = () => {
    dispatch(updateShowMenu())
  }
  return (
    <nav className="top-menu flex">
      <div className="left flex">
        <img className={`arrow ${showMenu ? 'turn-arrow' : ''}`} src={require('../assets/img/arrowLeft.png').default} alt="arrow left" />

        <button onClick={openMenu}><img src={require('../assets/img/menu.png').default} alt="menu" /></button>
        <button><img src={require('../assets/img/search.png').default} alt="search" /></button>
      </div>
      <div className="right flex space-between">
        <button className="add-project"></button>
        <button><img src={require('../assets/img/messages.png').default} alt="messages" /></button>
        <button><img src={require('../assets/img/notifications.png').default} alt="notifications" /></button>
        <div className="container">
          <button><img src={require('../assets/img/people/person-1.png').default} alt="notifications" /></button>
          <button><img src={require('../assets/img/polygon_1.png').default} alt="arrow down" /></button>
        </div>
      </div>
    </nav>
  )
}
