import { MdOutlineEdit } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
import { MaskCPF, MaskCNPJ, MaskTel } from "../assets/validations";
import Link from "next/link";
import api from "../api/api";
export default function TableClients(props: any): JSX.Element {
  async function handleDelete(id: string) {
    try {
      await props.deleteClient(id);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <table className="tableClients">
      <thead className="tableClients-head">
        <tr>
          <th>ID</th>
          <th>Nome/Razão Social</th>
          <th>CPF/CNPJ</th>
          <th>Email</th>
          <th>Tel</th>
          <th>Cel</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="tableClients-body">
        {props.clients.map((client: any) => {
          return (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.type === "F" ? client.name : client.companyName}</td>
              <td>
                {client.type === "F"
                  ? MaskCPF(client.cpf)
                  : MaskCNPJ(client.cnpj)}
              </td>
              <td>{client.email}</td>
              <td>{MaskTel(client.telephone)}</td>
              <td>{MaskTel(client.cellphone)}</td>
              <td>
                <button className="tableClients-body-edit">
                  <Link href={`/costumerRegister/${client.id}`}>
                    <MdOutlineEdit />
                  </Link>
                </button>
                <button
                  className="tableClients-body-delete"
                  onClick={() => handleDelete(client.id)}
                >
                  <FiUserX />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
