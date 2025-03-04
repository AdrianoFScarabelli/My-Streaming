import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Home = ({ onLogout }) => {

    const [search, setSearch] = useState('');
    const [mostrarFilmes, setMostrarFilmes] = useState(null);
    const [isTodosPressed, setIsTodosPressed] = useState(true);
    const [isFilmesPressed, setIsFilmesPressed] = useState(false);
    const [isSeriesPressed, setIsSeriesPressed] = useState(false);

    const filmes = [
        { id: 1, tipo: 'filme', titulo: 'Vingadores: Ultimato', poster: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg' },
        { id: 2, tipo: 'filme', titulo: 'Batman', poster: 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg' },
        { id: 3, tipo: 'filme', titulo: 'Star Wars 3', poster: 'https://m.media-amazon.com/images/S/pv-target-images/3a991f1ad651779c8701339593c0a7c6afa18ba8844da38a1740e9fea2ebe873.jpg' },
        { id: 4, tipo: 'filme', titulo: 'O Senhor dos Anéis', poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg' },
        { id: 5, tipo: 'filme', titulo: 'Matrix', poster: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG' },
        { id: 6, tipo: 'filme', titulo: 'Scott Pilgrim', poster: 'https://m.media-amazon.com/images/I/816bWKvBf-L._AC_UF894,1000_QL80_.jpg' },
        { id: 7, tipo: 'serie', titulo: 'Ruptura', poster: 'https://image.tmdb.org/t/p/original/d09X5AzxBq4GkHL6j8pmkDPySfA.jpg' },
        { id: 8, tipo: 'serie', titulo: 'Breaking Bad', poster: 'https://i.pinimg.com/1200x/52/2e/f7/522ef7522eb25fccd9e8330ca97d10ac.jpg' },
        { id: 9, tipo: 'serie', titulo: 'The Office', poster: 'https://m.media-amazon.com/images/I/71uEssS1AAL._AC_UF894,1000_QL80_.jpg' },
        { id: 10, tipo: 'serie', titulo: 'The Bear', poster: 'https://shop.fxnetworks.com/cdn/shop/products/TB-S1KA-47-100123-RO_1080x.png?v=1663340447' },
        { id: 11, tipo: 'serie', titulo: 'Stranger Things', poster: 'https://i5.walmartimages.com/seo/Stranger-Things-Season-4-Movie-Poster-TV-Series-Quality-Glossy-Print-Photo-Wall-Art-Millie-Bobby-Brown-Sizes-Available-8x10-11x17-16x20-22x28-24x36-2_b9112ac2-aedb-4f3f-a04a-02c43f99971f.e9a8821af80bcd1b10abff5a3548b366.jpeg' },
        { id: 12, tipo: 'serie', titulo: 'Vikings', poster: 'https://img.elo7.com.br/product/zoom/26BBDC4/big-poster-serie-vikings-lo04-tamanho-90x60-cm-serie.jpg' },
        { id: 13, tipo: 'filme', titulo: 'Gladiador', poster: 'https://www.movieposters.com/cdn/shop/files/Gladiator.mpw.102813_480x.progressive.jpg?v=1707500493' },
        { id: 14, tipo: 'filme', titulo: 'Coringa', poster: 'https://static.wixstatic.com/media/5801fd_071b71daa7c24b04a5478815dee17030~mv2.jpg/v1/fill/w_675,h_1000,al_c,q_85,usm_0.66_1.00_0.01/5801fd_071b71daa7c24b04a5478815dee17030~mv2.jpg' },
        { id: 15, tipo: 'filme', titulo: 'Clube da Luta', poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg' },
        { id: 16, tipo: 'filme', titulo: 'Parasita', poster: 'https://media.licdn.com/dms/image/v2/D4D12AQHbMebMcXxw_A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703550560836?e=2147483647&v=beta&t=O90bI4RYWc8sgz16s6r1YcIBXMLKmMETktXfT5-6zUo' },
        { id: 17, tipo: 'filme', titulo: 'O Poderoso Chefão', poster: 'https://www.europanet.com.br/upload/id_produto/107___/107366g.jpg' },
        { id: 18, tipo: 'filme', titulo: 'The Karate Kid', poster: 'https://m.media-amazon.com/images/I/81L3xP54gsL.jpg' },
        { id: 19, tipo: 'serie', titulo: 'Squid Game', poster: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/d/k/medium-squid-game-hd-poster-for-wall-decor-a3-poster-squid-game-original-imagv2vxrqtudpet.jpeg?q=90&crop=false' },
        { id: 20, tipo: 'serie', titulo: 'Shogun', poster: 'https://image.tmdb.org/t/p/original/xZbP7rrd7AU9N4CmiXz28h9b5qz.jpg' },
        { id: 21, tipo: 'serie', titulo: 'La Casa de Papel', poster: 'https://postercinema.eu/cdn/shop/files/la-casa-de-papel_00rispyd.jpg?v=1706818934' },
        { id: 22, tipo: 'serie', titulo: 'Arcane', poster: 'https://ravanna.vidangel.com/file/ravanna/gen/posters/tv-94605_0010_04_58029838071a55b9.jpg' },
        { id: 23, tipo: 'serie', titulo: 'One Piece', poster: 'https://br.web.img3.acsta.net/pictures/16/02/03/17/11/571106.jpg' },
        { id: 24, tipo: 'serie', titulo: 'The Big Bang Theory', poster: 'https://img.posterstore.com/zoom/wb0174-8thebigbangtheory-thegroup50x70.jpg' },
    ];

    const filtroConteudo = filmes.filter((item) =>
        item.titulo.toLowerCase().includes(search.toLowerCase()) &&
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
            <div>
                <img 
                    className="logo2" 
                    src="/logo.png" 
                    alt="My Streaming"
                    onClick={resetPage}
                    style={{cursor :'pointer'}}
                />
            </div>
            <div className='sair-container'>
                <button
                    className='sair-button'
                    type='button'
                    onClick={onLogout}
                >
                    Sair
                </button>
            </div>
            <h1 className="welcome">Bem-vindo ao My Streaming</h1>
            <div className='search-container'>
                <input
                    className='search-input'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquise o nome de um filme ou série"
                />
                <button className='search-icon'>
                    <FaSearch />
                </button>
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
                {filtroConteudo.length > 0 ? (
                    filtroConteudo.map((item) => (
                        <div key={item.id} className="filme-card">
                            <img src={item.poster} alt={item.titulo} className="filme-poster" />
                            <h3>{item.titulo}</h3>
                        </div>
                    ))
                ) : (
                    <div>
                        <div className='none-container'>
                            <p className='search-none'>Nenhum filme ou série encontrado.</p>
                        </div>
                        <div className="space"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;