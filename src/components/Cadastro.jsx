import React, { useState } from 'react';

const Cadastro = ({ onRegister, onReturn }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    if (!email || !password || !confirmPassword) {
      setError('Preencha todos os campos');
      return;
    }

    onRegister(email, password);

  };

  return (
    <div className="login-container">
      <div className="background-container"></div>
      <form onSubmit={handleRegister}>
        <h2>Cadastro</h2>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Cadastrar</button>
        <button
        type='button'
        onClick={onReturn}
        >
            Voltar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;