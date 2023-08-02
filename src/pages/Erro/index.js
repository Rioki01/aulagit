import { Link } from "react-router-dom";
//Link substitui o <a> para criar navegações entre as telas.
function Erro()
{
    return(
        <div>
            <h2>Ops! Parece que essa pagina não existe!</h2>
            <span>Encontramos essas páginas aqui:</span>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/produto">Produto</Link>
            <Link to="/contato">Contato</Link>
        </div>
    );
}

export default Erro;