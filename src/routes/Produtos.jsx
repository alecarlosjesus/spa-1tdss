import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { MdDeleteForever as Excluir } from "react-icons/md";
import { useEffect, useState } from "react";
import ModalAction from "../Components/ModalAction/ModalAction";

export default function Produtos() {
  document.title = "Lista de Produtos";

  const [produtos, setProdutos] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (!open) {
      fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((listaProdutos) => {
          setProdutos(listaProdutos);
        });
    }
    setId(0);
  }, [open]);

  const handleUpdate = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "DELETE"
    })
    .then((response)=> {

      fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((listaProdutos) => {
          setProdutos(listaProdutos);
        });fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((listaProdutos) => {
          setProdutos(listaProdutos);
        });

    })
    .catch(error=>console.log(error))

  }


  return (
    <div>
      <h1>Produtos</h1>

      {open ? (
        <ModalAction
          open={open}
          setOpen={setOpen}
          idEditar={id}
          setId={setId}
        />
      ) : (
        ""
      )}
      <Link onClick={() => setOpen(true)}>Add-Produto</Link>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>NOME</th>
            <th className={styles.tableHeader}>PREÇO</th>
            <th className={styles.tableHeader}>EDITAR / EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                <Link onClick={() => handleUpdate(produto.id)}>
                  {" "}
                  <Editar />{" "}
                </Link>{" "}
                |{" "}
                <Link onClick={()=> handleDelete(produto.id)} >
                  {" "}
                  <Excluir />{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}>
              PRODUTOS
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
