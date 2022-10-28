import { MdOutlineEdit } from "react-icons/md";
import { FiUserX } from "react-icons/fi";
export default function TableClients(): JSX.Element {
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
        <tr>
          <td>1</td>
          <td>João da Silva</td>
          <td>123.456.789-00</td>
          <td>joaodasilva@gmail.com</td>
          <td>(11) 1234-5678</td>
          <td>(11) 98765-4321</td>
          <td>
            <button className="tableClients-body-edit">
              <MdOutlineEdit />
            </button>
            <button className="tableClients-body-delete">
              <FiUserX />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
