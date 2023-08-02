import { Link } from "react-router-dom";
function Contato()
{
    return(
        <div>
            <h1>Contato</h1>
            <span>Contato (DD)xxx-xxxxxx</span>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/produto">Produto</Link>
            <Link to="/contato">Contato</Link>
        </div>
    );
}

export default Contato;