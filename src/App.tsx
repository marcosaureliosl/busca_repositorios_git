import { Outlet } from 'react-router-dom';
import classes from './App.module.css';
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.githubContainer}>
        <BsGithub className={classes.githubIcon} />
      </div>
      <h1>GitHub</h1>
      <Outlet />
    </div>
  )
}

export default App;
