
import styles from './styles.module.css';
import {
  Route,
  BrowserRouter as Router, Routes
} from 'react-router-dom';

//NavBar
import NavBar from './components/NavBar/index.tsx';
//Pages
import Homepage from './routes/homepage/index.jsx';

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
