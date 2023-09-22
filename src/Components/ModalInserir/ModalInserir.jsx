import "./ModalInserir.scss";

export default function ModalInserir(props) {
  document.title = "CADASTRAR";
  if (props.open) {
    return (
      <div className="container">
        <h1>Modal Inserir</h1>
        

        <div>
        <button onClick={()=> props.setOpen(false)}> X </button>
            <form>
    
                <fieldset>
                    <legend>Cadastrar Produto</legend>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="nome" placeholder="Digite o nome do produto"/>
                    </div>
                    <div>
                        <label htmlFor="">Preço:</label>
                        <input type="number" name="preco" placeholder="Digite o valor do produto"/>
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
