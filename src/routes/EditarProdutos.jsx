import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o ID com o HOOK useParams()
  const {id} = useParams();

  // const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
  //   if(produto.id == parseInt(id)){
  //           return produto;
  //       }
  //     });

  const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];
  
  return (
    <>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado - {id}</p>
      <p>Produto selecionado - {produtoRecuperadoPorId.nome}</p>
    </>


  )
}
