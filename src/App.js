import './App.css';
import { Navigation } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { DetailNews } from './pages/Detail';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Detail/:NewsID' element={<DetailNews />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
