import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss"

export default function Cabecalho(){

    const rotaAtual = useLocation();

    return(
        <>
            <header className="cabecalho"> 
                <ul>
                    <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link></li>
                </ul>
            </header>
        </>
    )
}