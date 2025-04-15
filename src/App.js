import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import HomePage from './components/homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;