import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Titulos from '../data/Titulos';

const titulos = Titulos;

const Detalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = titulos.find((f) => f.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!item) return <p style={{ color: 'white' }}>Não encontrado.</p>;

    return (
        <div className="detalhes-container">
            <div className="background-container"></div>
            <div className="detalhes-header">
                <button className='sair-button' onClick={() => navigate(-1)}>
                    <FiLogOut className='sair-icon'/>
                    Voltar
                </button>
            </div>
            <div className="detalhes-info">
                <div>
                    <h1>{item.titulo}</h1>
                    <div className="titulo-info">
                        <h3>Gênero</h3>
                        <h4>{item.tipo === 'filme' ? '🎬 Filme' : '📺 Série'}</h4>
                    </div>
                    <div className="titulo-info">
                        <h3>Nome original</h3>
                        <h4>{item.nmOriginal}</h4>
                    </div>
                    <div className="titulo-info">
                        <h3>Diretor</h3>
                        <h4>{item.nmDiretor}</h4>
                    </div>
                    <div className="titulo-info">
                        <h3>Roteirista</h3>
                        <h4>{item.nmRoteirista}</h4>
                    </div>
                    <div className="titulo-info">
                        <h3>Data de Lançamento</h3>
                        <h4>{item.dtLancamento}</h4>
                    </div>
                </div>
                <img src={item.poster} alt={item.titulo} className="detalhes-poster" />
            </div>
            <div>
                <h2>Disponível em</h2>
                <div className="atores-container">
                    {item.ftStreaming.map((foto, index) => (
                        <img
                            key={index}
                            className='streaming-image'
                            src={foto}
                            alt="logo streaming"
                        />
                    ))}
                </div>
                <h2>Principais atores</h2>
                <div className="atores-container">
                    <div className="atores-card">
                        <img className="atores-image" src={item.ftAtores[0]} alt="imagem do ator" />
                        <h3>{item.nmAtores[0]}</h3>
                    </div>
                    <div className="atores-card">
                        <img className="atores-image" src={item.ftAtores[1]} alt="imagem do ator" />
                        <h3>{item.nmAtores[1]}</h3>
                    </div>
                    <div className="atores-card">
                        <img className="atores-image" src={item.ftAtores[2]} alt="imagem do ator" />
                        <h3>{item.nmAtores[2]}</h3>
                    </div>
                </div>
            </div>
            <h2>Assista ao trailer</h2>
            <iframe 
                width="1260" height="615" 
                src={item.trailer}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default Detalhes;