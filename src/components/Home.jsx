import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Titulos from '../data/Titulos';

const Home = ({ onLogout }) => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [mostrarFilmes, setMostrarFilmes] = useState(null);
    const [isTodosPressed, setIsTodosPressed] = useState(true);
    const [isFilmesPressed, setIsFilmesPressed] = useState(false);
    const [isSeriesPressed, setIsSeriesPressed] = useState(false);

    const titulos = Titulos;

    const removerAcentos = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const filtroConteudo = titulos.filter((item) =>
        removerAcentos(item.titulo.toLowerCase()).includes(removerAcentos(search.toLowerCase())) &&
        (mostrarFilmes === null || item.tipo === (mostrarFilmes ? 'filme' : 'serie'))
    );

    const resetPage = () => {
        setSearch('');
        setMostrarFilmes(null);
        setIsTodosPressed(true);
        setIsFilmesPressed(false);
        setIsSeriesPressed(false);
    };

    const handleTodos = () => {
        setMostrarFilmes(null);
    };

    const handleFilme = () => {
        setMostrarFilmes(true);
    };

    const handleSerie = () => {
        setMostrarFilmes(false);
    };

    return (
        <div className={`home-container ${!isTodosPressed || filtroConteudo.length <=8 ? 'small-container' :''}`}>        
            <div className="background-container"></div>
            <div className='home-header'>
                <button
                    className="sair-button"
                    type='button'
                    onClick={onLogout}
                >
                    <FiLogOut className='sair-icon'/>
                    Sair
                </button>
                <img 
                    className="logo2" 
                    src="/logo.png" 
                    alt="My Streaming"
                    onClick={resetPage}
                    style={{cursor :'pointer'}}
                />
            </div>
            <h1 className="welcome">Bem-vindo ao My Streaming</h1>
            <div className='search-container'>
                <input
                    className='search-input'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="🔍Pesquise o nome de um filme ou série"
                />
            </div>
            <button
                className={`todos-button ${isTodosPressed ? 'pressed' : ''}`}
                type='button'
                onClick={() => {
                    if(isTodosPressed===false) {
                        handleTodos();
                        setIsSeriesPressed(false);
                        setIsFilmesPressed(false);
                        setIsTodosPressed(!isTodosPressed);
                    }
                    else {
                        return;
                    }
                    
                }}
            >
                Todos
            </button>
            <div className='filter-container'>
                <button
                    className={`filmes-button ${isFilmesPressed ? 'pressed' : ''}`}
                    type='button'
                    onClick={() => {
                        if(isFilmesPressed===false) {
                            handleFilme();
                            setIsTodosPressed(false);
                            setIsSeriesPressed(false);
                            setIsFilmesPressed(!isFilmesPressed);
                        }
                        else {
                            return;
                        }
                        
                    }}
                >
                    Filmes
                </button>
                <button
                    className={`series-button ${isSeriesPressed ? 'pressed' : ''}`}
                    type='button'
                    onClick={() => {
                        if(isSeriesPressed===false) {
                            handleSerie();
                            setIsTodosPressed(false);
                            setIsFilmesPressed(false);
                            setIsSeriesPressed(!isSeriesPressed);
                        }
                        else {
                            return;
                        }
                    }}
                >
                    Séries
                </button>
            </div>
            <div className="filmes-grid">
                {filtroConteudo.map((item) => (
                    <div
                        key={item.id}
                        className="filme-card"
                        onClick={() => navigate(`/detalhes/${item.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={item.poster} alt={item.titulo} className="filme-poster" />
                        <h3>{item.titulo}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;