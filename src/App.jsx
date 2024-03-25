
import styles from './styles.module.css';
import {
  Route,
  BrowserRouter as Router, Routes
} from 'react-router-dom';

//NavBar
import NavBar from './components/NavBar';
//Pages
import Homepage from './routes/homepage';

export function RootApp() {
  return (
    <Router basename="https://peytonk25.github.io/portfolio/">
      <div className={styles.screen}>
        <div className={styles.navigation}>
          <NavBar />
        </div>
        <div className={styles.main_page}>
        <Routes>
          <Route path='/' element={<Homepage/>} />
        </Routes>
        </div>
      </div>
    </Router>
    
  );
}
