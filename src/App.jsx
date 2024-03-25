
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
      <div className={styles.screen}>
        <div className={styles.navigation}>
          <NavBar />
        </div>
        <div className={styles.main_page}>
        
          <Homepage />
        
        </div>
      </div>
    
    
  );
}
