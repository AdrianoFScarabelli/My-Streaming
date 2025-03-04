import React, { useState } from 'react';

const Login = ({onLogin, onSwitchToRegister, contas}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {

        e.preventDefault();

        let contaValida = false;

        for (let i = 0; i < contas.length; i++) {
            const [validEmail, validPassword] = contas[i];
            
            if (validEmail === email && validPassword === password) {
                contaValida = true;
                break;
            }
        }

        if (!email || !password) {
            setError('Preencha todos os campos');
            return;
        }

        if (contaValida) {
            onLogin();
        } else {
            setError('Usuário ou senha inválidos');
        }

    };

    return (
        <div className="login-container">
            <div className="background-container"></div>
            <form onSubmit={handleLogin}>
                <img className="logo" src="/logo.png" alt="react" />
                <h2>My Streaming</h2>
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
                    placeholder='Digite sua senha'
                    />
                </div>
                {error && <p className='error'>{error}</p>}
                <button
                    className='login-button'
                    type='submit'
                >
                    Entrar
                </button>
                <div className='ou-container'>
                    <div className='divider'></div>
                    <p>ou</p>
                    <div className='divider'></div>
                </div>
                <button
                    className='cadastro-button'
                    type='button'
                    onClick={onSwitchToRegister}
                >
                    Crie uma conta
                </button>
            </form>
        </div>
    );

};

export default Login;