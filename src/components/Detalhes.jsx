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
            <button onClick={() => navigate(-1)}>← Voltar</button>
            <img src={item.poster} alt={item.titulo} className="detalhes-poster" />
            <h1>{item.titulo}</h1>
            <p>{item.tipo === 'filme' ? '🎬 Filme' : '📺 Série'}</p>
        </div>


    );
};

export default Detalhes;