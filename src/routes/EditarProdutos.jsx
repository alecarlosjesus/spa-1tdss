import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //O HOOK useParams()
  const {id} = useParams();

  const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
    if(produto.id == parseInt(id)){
            return produto;
        }
      });
  
  return (
    <>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado - {id}</p>
      <p>Produto selecionado - {produtoRecuperadoPorId[0].nome}</p>
    </>


  )
}
