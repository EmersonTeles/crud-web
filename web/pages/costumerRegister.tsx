import { useState } from "react";
import { JuristicPerson } from "../components/juristicPersonForm";
import NaturalPerson from "../components/naturalPersonForm";
import NavBar from "../components/navbar";

export default function CostumerRegisterPage(): JSX.Element {
  const [formType, setFormType] = useState<string>("JuristicPerson");

  function handleFormType(type: string) {
    setFormType(type);
  }
  return (
    <div className="register">
      <NavBar>
        <h1>Cadastro / Clientes / Cadastrar Clientes</h1>
      </NavBar>
      <div className="register-content">
        <h1 className="register-content-title">Adicionar Novo Cliente</h1>

        <form className="register-content-form">
          <h3>Tipo</h3>
          <div className="register-content-form_type">
            <input
              type="radio"
              id="html"
              name="formType"
              value="JuristicPerson"
              checked={formType === "JuristicPerson"}
              onChange={(e) => handleFormType(e.target.value)}
            />
            <label htmlFor="html">Pessoa Jurídica</label>
            <input
              type="radio"
              id="css"
              name="formType"
              value="NaturalPerson"
              checked={formType === "NaturalPerson"}
              onChange={(e) => handleFormType(e.target.value)}
            />
            <label htmlFor="css">Pessoa Física</label>
          </div>
          {formType === "NaturalPerson" ? (
            <NaturalPerson />
          ) : (
            <JuristicPerson />
          )}
        </form>
      </div>
    </div>
  );
}
