export default function ModalInserir(props) {
  document.title = "CADASTRAR";
  if (props.open) {
    return (
      <div>
        <h1>Modal Inserir</h1>
      </div>
    );
  }
}
