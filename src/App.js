import classes from './App.module.css';
import MainDash from './conponents/main-dash/MainDash';
import SideBar from './conponents/sidebar/SideBar';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes["dashboard__container"]}>
          <SideBar />
          <MainDash />
      </div>
    </div>
  );
}

export default App;
