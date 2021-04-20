import { useDispatch } from "react-redux"
import { updateShowMenu } from '../store/actions/appAction'
import { NavLink } from "react-router-dom"

export const Page = ({ name, imgName }) => {
  const dispatch = useDispatch()
  const image = require(`../assets/img/links/${imgName}.png`).default
  const updateLink = () => {
    dispatch(updateShowMenu())
  }
  return (
    <NavLink exact activeClassName="active" className=" page flex" to={`/${name}`} onClick={updateLink}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </NavLink >
  )
}
