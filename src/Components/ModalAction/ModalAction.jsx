import { useEffect } from "react";
import "./ModalAction.scss";
import { useState } from "react";

export default function ModalAction(props) {
  document.title = "CADASTRAR";

  console.log(props.idEditar);

  //CRIAR O BLOCO DE GERAÇÃO DO ID DO PRODUTO:
  let novoId;
  const [produto, setProduto] = useState({
    id:novoId,
    nome:"",
    preco:""
  });

  useEffect(()=>{
    
    fetch(`http://localhost:5000/produtos/${props.idEditar > 0 ? props.idEditar : ""}`,{
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((resp)=>{
      console.log("Status do REQUEST HTTP : " + resp.status);
      return resp.json()
    })
    .then((resp)=>{

      if(props.idEditar > 0){
        setProduto(resp);
      }else{
        novoId = (resp[resp.length-1].id + 1);
        console.log("NOVO ID : " + novoId);
        return novoId;
      }

    })
    
   },[]);
  

  const handleChange = (e)=>{
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({...produto,[name]:value});
  }

const handleSubmit = (e)=>{
  e.preventDefault();

  fetch(`http://localhost:5000/produtos/${props.idEditar > 0 ? props.idEditar : ""}`,{
    
    method: (props.idEditar > 0 ? "PUT" : "POST"),
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(produto)
  })
  .then((resp)=>{ 
    console.log("Status do REQUEST HTTP : " + resp.status);
    console.log(resp.json());
    })
  .catch(error => console.log(error));


  //Zerando o id do produto:
  props.setId(0);
  //Fechando o modal.
  props.setOpen(false);
};

  if (props.open) {
    return (
      <div className="container">
        <h1>{props.idEditar > 0 ? "EDITAR PRODUTOS" : "CADASTRO DE PRODUTOS"}</h1>
        
        <div>
            <form onSubmit={handleSubmit}>
    
                <fieldset>
        <span className="btnClose" onClick={()=> props.setOpen(false) }>X</span>
                    <legend>Novo Produto</legend>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="nome" value={produto.nome} onChange={handleChange} placeholder="Digite o nome do produto"/>
                    </div>
                    <div>
                        <label htmlFor="">Preço:</label>
                        <input type="number" name="preco" value={produto.preco} onChange={handleChange} placeholder="Digite o valor do produto"/>
                    </div>
                    <div>
                        <button>{props.idEditar > 0 ? "EDITAR" : "CADASTRAR"}</button>
                    </div>
                </fieldset>
            </form>
        </div>

      </div>
    );
  }
}
