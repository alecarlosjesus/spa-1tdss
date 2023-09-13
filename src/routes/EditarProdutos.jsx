import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = `Editar Produtos` ;
 

  //Recuperando o ID com o HOOK useParams()
  const {id} = useParams();


  const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

  const [produto, setProduto] = useState({
    id: produtoRecuperadoPorId.id,
    nome: produtoRecuperadoPorId.nome,
    preco: produtoRecuperadoPorId.preco
  });

  const handleChangeProduto = (event)=> {

        //Destructuring
        const {name, value} = event.target;

        //Popular o objeto produto com o setProduto() utilizando o operador SPREAD (...)
        setProduto({...produto,[name]:value});

  }


  return (
    <>
      <div>
        <h1>Editar Produtos</h1>
        <div>
          <form>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <input type="hidden" name="id"/>
              </div>
              <div>
                <label htmlFor="idNome">Nome:</label>
                <input type="text" name="nome" id="idNome" onChange={handleChangeProduto} value={produto.nome}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço:</label>
                <input type="number" name="preco" id="idPreco" onChange={handleChangeProduto} value={produto.preco}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>
            </fieldset>
          </form>
        </div>
        <p>Nome : {produto.nome}</p>
        <p>Preço : {produto.preco}</p>
      </div>
    </>


  )
}
