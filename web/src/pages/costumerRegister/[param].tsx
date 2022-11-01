import { useCallback, useEffect, useState } from "react";
import { JuristicPerson } from "../../components/juristicPersonForm";
import NaturalPerson from "../../components/naturalPersonForm";
import NavBar from "../../components/navbar";
import api from "../../utils/api";

export default function CostumerRegisterPage({ param }: any): JSX.Element {
  const [formType, setFormType] = useState<string>("J");
  const [client, setClient] = useState<object>({});

  function handleFormType(type: string) {
    setFormType(type);
  }

  const getData = useCallback(async () => {
    try {
      const response = await api.get("/clients/" + param);
      setClient(response.data);
      setFormType(response.data.type);
    } catch (error) {
      console.log(error);
    }
  }, [param]);
  useEffect(() => {
    if (param != "new") {
      getData();
    }
  }, []);
  return (
    <div className="register">
      <NavBar title="Cadastro / Clientes / Cadastrar Clientes" />
      <div className="register-content">
        <h1 className="register-content-title">Adicionar Novo Cliente</h1>

        <form className="register-content-form">
          <h3>Tipo</h3>
          <div className="register-content-form_type">
            <input
              type="radio"
              id="html"
              name="formType"
              value="J"
              checked={formType === "J"}
              onChange={(e) => handleFormType(e.target.value)}
              disabled={param !== "new"}
            />
            <label htmlFor="html">Pessoa Jurídica</label>
            <input
              type="radio"
              id="css"
              name="formType"
              value="F"
              checked={formType === "F"}
              onChange={(e) => handleFormType(e.target.value)}
              disabled={param !== "new"}
            />
            <label htmlFor="css">Pessoa Física</label>
          </div>
          {formType === "F" ? (
            <NaturalPerson param={param} client={client} />
          ) : (
            <JuristicPerson param={param} client={client} />
          )}
        </form>
      </div>
    </div>
  );
}
CostumerRegisterPage.getInitialProps = async ({ query }: any) => {
  const { param } = query;
  return { param };
};
