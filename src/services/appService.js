const gPages = [
  {
    name: 'Home',
    imgName: 'home'

  },
  {
    name: 'Workflow',
    imgName: 'workflow'
  },
  {
    name: 'Statistics',
    imgName: 'statistics'
  },
  {
    name: 'Calendar',
    imgName: 'calendar'
  },
  {
    name: 'Users',
    imgName: 'users'
  }
  ,
  {
    name: 'Settings',
    imgName: 'settings'
  }
]



const gTasks = [
  {
    title: 'New website for Symu.co',
    creator: 'Nymrod',
    timeToSubmit: Date.now() - 1000 * 60 * 60 * 24 * 5,
    _id: Math.random()
  },
  {
    title: 'Free business PSD Template',
    creator: 'Farok',
    timeToSubmit: Date.now() - 1000 * 60 * 60 * 24 * 2,
    _id: Math.random()
  },
  {
    title: 'New logo for JCD.pl',
    creator: 'Nymrod',
    timeToSubmit: Date.now() + 1000 * 60 * 60 * 24 * 5,
    _id: Math.random()
  },
  {
    title: 'Free Icons Set vol. 3',
    creator: 'Farok',
    timeToSubmit: Date.now() + 1000 * 60 * 60 * 24 * 10,
    _id: Math.random()
  },
]

const gMessages = [
  {
    creator: 'Nina Jones',
    sentAt: Date.now() - 1000 * 60 * 5,
    message: 'Hey You! It’s me again :-) I attached new (...)',
    picture: 'nina-jones.png',
    _id: Math.random()
  },
  {
    creator: 'Nina Jones',
    sentAt: Date.now() - 1000 * 60 * 60 * 20,
    message: 'Hey! I attached some new PSD files for (...)',
    picture: 'nina-jones.png',
    _id: Math.random()
  },
  {
    creator: 'James Smith',
    sentAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    message: 'Hey! I attached some new PSD files for (...)',
    picture: 'james-smith.png',
    _id: Math.random()
  },
  {
    creator: 'Nina Jones',
    sentAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
    message: 'Hello! Could You bring me coffee please?',
    picture: 'nina-jones.png',
    _id: Math.random()
  },
]
const gActivities = [
  {
    creator: 'Nina Jones',
    sentAt: Date.now(),
    on: 'Free UI Kit',
    action: 'added a new project',
    picture: 'nina-jones.png',
    _id: Math.random()
  },
  {
    creator: 'James Smith',
    sentAt: Date.now() - 1000 * 60 * 40,
    on: 'Free PSD Template',
    action: 'commented project',
    picture: 'james-smith.png',
    _id: Math.random()
  },
  {
    creator: 'Alex Clooney',
    sentAt: Date.now() - 1000 * 60 * 60,
    on: 'Symu Website',
    action: 'completed task',
    picture: 'alex-clooney.png',
    _id: Math.random()
  },
  {
    creator: 'Alexandra Spears',
    sentAt: Date.now() - 1000 * 60 * 60 * 3,
    on: 'Free PSD (...)',
    action: 'added a new project',
    picture: 'alexandra-spears.png',
    _id: Math.random()
  },
]

export const getPages = () => gPages
export const getTasks = () => gTasks
export const getMessages = () => gMessages
export const getActivities = () => gActivities

export const checkDays = (timeToSubmit) => {
  return Math.round((Date.now() - timeToSubmit) / (1000 * 60 * 60 * 24))
}

export const getTime = (time) => {
  const diff = (Date.now() - time).toString()
  const minute = 1000 * 60
  const hour = 1000 * 60 * 60
  const day = 1000 * 60 * 60 * 24
  const week = 1000 * 60 * 60 * 24 * 7

  if (diff >= minute && diff < hour) {
    if (diff / minute === 1) return `1 minute ago`
    else return `${Math.ceil(diff / (minute))} minutes ago`
  }
  if (diff >= hour && diff < day) {
    if (diff / hour === 1) return `1 hour ago`
    else return `${Math.ceil(diff / (hour))} hours ago`
  }

  if (diff >= day && diff < week) {
    if (diff / day === 1) return `1 day ago`
    else return `${Math.ceil(diff / (day))} days ago`
  }
  if (diff >= week) {
    if (diff / week === 1) return `1 week ago`
    else return `${Math.ceil(diff / (week))} week ago`
  }
  else return `just now`
}
