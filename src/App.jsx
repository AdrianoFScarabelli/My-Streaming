import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Detalhes from './components/Detalhes';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [contas, setContas] = useState([]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const handleRegister = (email, password) => {
    setContas((prevContas) => [...prevContas, [email, password]]);
    setIsRegistering(false);
  };
  const switchToRegister = () => setIsRegistering(true);
  const handleReturn = () => setIsRegistering(false);

  return (
    <BrowserRouter>
      <div className={`app-container ${isLoggedIn ? 'app-top' : 'app-center'}`}>
        <Routes>

          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home onLogout={handleLogout} />
              ) : isRegistering ? (
                <Cadastro onRegister={handleRegister} onReturn={handleReturn} />
              ) : (
                <Login
                  onLogin={handleLogin}
                  onSwitchToRegister={switchToRegister}
                  contas={contas}
                />
              )
            }
          />

          <Route
            path="/detalhes/:id"
            element={isLoggedIn ? <Detalhes /> : <Navigate to="/" />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;