import './App.css';
import { Navigation } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path='register' element={<RegisterPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
