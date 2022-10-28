import AddClientButton from "../components/addClientButton";
import NavBar from "../components/navbar";
import Search from "../components/search";
import TableClients from "../components/tableClients";

export default function Home() {
  return (
    <div className="container">
      <NavBar>
        <h1>Cadastro / Clientes</h1>
      </NavBar>
      <div className="content">
        <div className="content-menu">
          <AddClientButton />
          <Search value="" name="" onChange={() => {}} onSubmit={() => {}} />
        </div>
        <TableClients />
      </div>
    </div>
  );
}
