import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Sobre from './pages/Sobre/index';
import Contato from './pages/Contato/index';
import Produto from './pages/Produto/index';
import Erro from './pages/Erro/index';

import Header from "./components/Header/index";

function RoutesApp()
{   //Configura as rotas apos o return.
     //Configurando o Index do projeto.
    //Header para todas as paginas, e apos Routes com as Route para cada dominio.
    //element é o elemento que sera carregado apos o path. ou seja, a pasta da página.
    //rotas sem /, utilizando "*", significa qualquer rota que não exista.
    return(
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;