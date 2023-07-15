import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import SignUp from './pages/signup';
import LandingPage from './pages/landingpage';
import Top from './components/top';
import { AuthContextProvider } from './firebase/auth';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Top />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
