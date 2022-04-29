import classes from './App.module.css';
import MainDash from './conponents/main-dash/MainDash';
import News from './conponents/news/News';
import SideBar from './conponents/sidebar/SideBar';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes["dashboard__container"]}>
          <SideBar />
          <MainDash />
          <News />
      </div>
    </div>
  );
}

export default App;
