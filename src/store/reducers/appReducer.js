
const initialState = {
  showMenu: false,
  tasks: [],
  messages: [],
  activities: [],
  currLink: 'Home'
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MENU':
      return { ...state, showMenu: !state.showMenu }
    case 'GET_TASKS':
      return { ...state, tasks: action.data }
    case 'GET_MESSAGES':
      return { ...state, messages: action.data }
    case 'GET_ACTIVITIES':
      return { ...state, activities: action.data }
    case 'CHANGE_LINK':
      return { ...state, currLink: action.link }
    default:
      return state
  }
}