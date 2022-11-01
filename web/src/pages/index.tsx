import AddClientButton from "../components/addClientButton";
import NavBar from "../components/navbar";
import Search from "../components/search";
import TableClients from "../components/tableClients";
import api from "../utils/api";
import { useCallback, useEffect, useRef, useState } from "react";
export default function Home() {
  const [clients, setClients] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const clientsDefault = useRef<string[]>([]);

  function handleSearch(e: any) {
    setSearch(e.target.value);
    let searchTMP = e.target.value;
    let clientsTmp = clientsDefault.current ? clientsDefault.current : [];

    clientsTmp = clientsTmp.filter(
      (client: any) =>
        client.name?.toLowerCase().includes(searchTMP.toLowerCase()) ||
        client.companyName?.toLowerCase().includes(searchTMP.toLowerCase())
    );

    if (clientsTmp.length > 0) {
      setClients(clientsTmp);
    } else {
      setClients(clientsDefault.current);
    }
  }
  const getData = useCallback(async () => {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
      clientsDefault.current = response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteClient = useCallback(
    async (id: string) => {
      try {
        await api.delete("/clients/" + id);
        getData();
      } catch (error) {
        console.log(error);
      }
    },
    [getData]
  );
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <NavBar title="Cadastro / Clientes" />
      <div className="content">
        <div className="content-menu">
          <AddClientButton />
          <Search value={search} name="search" onChange={handleSearch} />
        </div>
        <TableClients clients={clients} deleteClient={deleteClient} />
      </div>
    </div>
  );
}
