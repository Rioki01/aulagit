import { Link } from "react-router-dom";
//Link substitui o <a> para criar navegações entre as telas.
function Produto()
{
    return(
        <div>
            <h1>Produtos!</h1>
            <span>Produto 1</span>
            <br/>
            <br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Produto;