import { Report } from "../cmps/Report"
import { Sales } from "../cmps/Sales"
import { Tasks } from "../cmps/Tasks"
import { Messages } from "../cmps/Messages"
import { Activities } from "../cmps/Activities"


export const Home = () => {
  return (
    <div className="home">
      <h1>Hello John!</h1>
      <section className="flex wrap " >
        <Sales />
        <Report />
      </section>
      <section className="events flex space-between" >
        <Tasks />
        <Messages />
        <Activities />
      </section>
    </div>
  )
}
