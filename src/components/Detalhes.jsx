import { useParams, useNavigate } from 'react-router-dom';
import Titulos from '../data/Titulos';

const titulos = Titulos;

const Detalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = titulos.find((f) => f.id === Number(id));

    if (!item) return <p style={{ color: 'white' }}>Não encontrado.</p>;

    return (
        <div className="detalhes-container">

            <div className="background-container"></div>

            <div className="detalhes-header">
                <button className='sair-button' onClick={() => navigate(-1)}>Voltar</button>
            </div>
            
            <div className="detalhes-info">
                <div>
                    <h1>{item.titulo}</h1>
                    <h3>Gênero {item.tipo === 'filme' ? '🎬 Filme' : '📺 Série'}</h3>
                    <div style={{display: 'flex'}}>
                        <h3 style={{marginRight:'10px'}}>Nome original</h3>
                        <h4>NOME</h4>
                    </div>
                    <div style={{display: 'flex'}}>
                        <h3 style={{marginRight:'10px'}}>Diretor</h3>
                        <h4>NOME DO DIRETOR</h4>
                    </div>
                    <div style={{display: 'flex'}}>
                        <h3 style={{marginRight:'10px'}}>Roteirista</h3>
                        <h4>NOME DO ROTEIRISTA</h4>
                    </div>
                    <div style={{display: 'flex'}}>
                        <h3 style={{marginRight:'10px'}}>Data de Lançamento</h3>
                        <h4>DATA DE LANÇAMENTO DO FILME</h4>
                    </div>
                </div>
                
                <img src={item.poster} alt={item.titulo} className="detalhes-poster" />

            </div>
            <h2>Principais atores</h2>
            <div className="atores-container">
                <div className="atores-card">
                    <img className="atores-image" src={item.atores} alt="imagem do ator" />
                    <h3>{item.titulo}</h3>
                </div>
            </div>
            <p className="space"></p>
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