import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"

export default function Produtos() {
  return (
    <div>
        <h1>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
           <td colSpan={2}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
