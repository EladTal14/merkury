import { getTasks, getMessages, getActivities } from '../../services/appService'

export function updateShowMenu() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SHOW_MENU' })
    } catch (err) {
      console.log('err Showing Menu', err);
    }
  }
}
export function getAllTasks() {
  return async (dispatch) => {
    try {
      const data = getTasks()
      dispatch({ type: 'GET_TASKS', data })
    } catch (err) {
      console.log('err getting tasks', err);
    }
  }
}
export function getAllMessages() {
  return async (dispatch) => {
    try {
      const data = getMessages()
      dispatch({ type: 'GET_MESSAGES', data })
    } catch (err) {
      console.log('err getting messages', err);
    }
  }
}
export function getAllActivities() {
  return async (dispatch) => {
    try {
      const data = getActivities()
      dispatch({ type: 'GET_ACTIVITIES', data })
    } catch (err) {
      console.log('err getting activities', err);
    }
  }
}
export function changeLink(link) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'CHANGE_LINK', link })
    } catch (err) {
      console.log('err changing link', err);
    }
  }
}