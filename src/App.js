import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TopMenu } from './cmps/TopMenu'
import { SideMenu } from './cmps/SideMenu';
import { Home } from './pages/Home';
import { Workflow } from './pages/Workflow';
import './assets/style/main.scss'

function App() {
  const showMenu = useSelector(({ appModule }) => appModule.showMenu)
  return (
    <div className={`App ${!showMenu ? 'column' : ''}`}  >
      <SideMenu />
      <section className="main">
        <TopMenu />
        <Switch>
          <Route component={Workflow} path="/Workflow" />
          <Route component={Home} path="/" />
        </Switch>
      </section>
    </div>
  );
}

export default App;
