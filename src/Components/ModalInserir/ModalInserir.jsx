import { useEffect } from "react";
import "./ModalInserir.scss";
import { useState } from "react";

export default function ModalInserir(props) {
  document.title = "CADASTRAR";

  //CRIAR O BLOCO DE GERAÇÃO DO ID DO PRODUTO:
  let novoId;

  useEffect(()=>{
    fetch("http://localhost:5000/produtos",{
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
      novoId = (resp[resp.length-1].id + 1);
      console.log("NOVO ID : " + novoId);
      return novoId;
    })
    
   },[]);
  
  const [produto, setProduto] = useState({
    id:novoId,
    nome:"",
    preco:""
  });

  const handleChange = (e)=>{
    e.preventDefault();
        // const { name, value } = e.target;

        // if(name === "nome"){
        //   setProduto({"nome" : value,"preco":""});
        // }else if(name === "preco"){
        //   setProduto({"nome" : "","preco":value});
        // }

    const { name, value } = e.target;
    setProduto({...produto,[name]:value});
  }

const handleSubmit = (e)=>{
  e.preventDefault();

  fetch("http://localhost:5000/produtos",{
    method: "POST",
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

  //Fechando o modal.
  props.setOpen(false)
};

  if (props.open) {
    return (
      <div className="container">
        <h1>CADASTRO DE PRODUTOS</h1>
        
        <div>
        <button className="btnClose" onClick={()=> props.setOpen(false) }> X </button>
            <form onSubmit={handleSubmit}>
    
                <fieldset>
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
                        <button>CADASTRAR</button>
                    </div>
                </fieldset>
            </form>
        </div>

      </div>
    );
  }
}
