import { Link } from "react-router-dom";
//Link substitui o <a> para criar navegações entre as telas.
function Home()
{
    return(
        <div>
            <h1>Bem-vindo(a) a página principal.</h1>
            <span>Gabriel Ogido</span>
            <br/>
            <br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Home;