import { useSelector } from "react-redux"
import { Pages } from "./Pages"
import { getPages } from '../services/appService'
export function SideMenu() {
  const showMenu = useSelector(({ appModule }) => appModule.showMenu)
  const pages = getPages()
  return (
    showMenu &&
    <div className="side-menu flex column">
      <img className="logo" src={require('../assets/img/logo.png').default} alt="logo" />
      <Pages pages={pages} />
    </div>
  )
}
