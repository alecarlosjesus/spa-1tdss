import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

 

  //Recuperando o ID com o HOOK useParams()
  const {id} = useParams();

  // const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
  //   if(produto.id == parseInt(id)){
  //           return produto;
  //       }
  //     });

  const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

  const [count, setCount] = useState(0);

  document.title = `Editar Produtos - ${count}` ;



  return (
    <>
      <h1>EditarProdutos</h1>
      <div>
        <button onClick={()=> setCount( count+1)}>COUNTER - {count}</button>
      </div>
      <p>Produto selecionado - {id}</p>
      <p>Produto selecionado - {produtoRecuperadoPorId.nome}</p>
      <p>Valor do counter = {count}</p>
    </>


  )
}
