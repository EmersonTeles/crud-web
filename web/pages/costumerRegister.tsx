import { useState } from "react";
import InputField from "../components/inputField";
import NaturalPerson from "../components/naturalPersonForm";
import NavBar from "../components/navbar";
import SelectField from "../components/selectFIeld";
import TextAreaField from "../components/textAreaField";

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

export function JuristicPerson() {
  const UFlist = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  return (
    <form>
      <main className="registerForm">
        <section>
          <InputField label="Razão social" name="inscriptionName" type="text" />
          <InputField label="Nome Fantasia" name="companyName" type="text" />
          <InputField label="Ativo" name="active" type="checkbox" />
          <InputField label="CNPJ" name="cnpj" type="text" />
          <label>Contribuinte</label>
          <div>
            <input
              type="radio"
              id="html"
              name="formType"
              value="JuristicPerson"
              onChange={(e) => handleFormType(e.target.value)}
            />
            <label htmlFor="html">Sim</label>
            <input
              type="radio"
              id="css"
              name="formType"
              value="NaturalPerson"
              onChange={(e) => handleFormType(e.target.value)}
            />
            <label htmlFor="css">Não</label>
          </div>
          <InputField label="Insc. Estadual" name="stateInsc" type="date" />
          <InputField label="Insc. Municipal" name="cityInsc" type="text" />
          <InputField label="Email" name="email" type="email" />
        </section>
        <section>
          <InputField
            label="Nome do Responsável"
            name="responsible"
            type="text"
          />
          <InputField label="CPF" name="cpf" type="text" />
          <InputField
            label="Data Nasc. REsponsável"
            name="respBirthDate"
            type="text"
          />
          <InputField label="Telefone" name="phone" type="tel" />
          <InputField label="Celular" name="cellphone" type="tel" />
          <InputField label="Email Responsável" name="respEmail" type="email" />
          <InputField label="CEP" name="cep" type="text" />
          <InputField label="Cidade" name="city" type="text" />
          <SelectField label="UF" name="uf" Items={UFlist} />
          <InputField label="Endereço" name="address" type="text" />
          <InputField label="Número" name="number" type="text" />
          <InputField label="Complemento" name="complement" type="text" />
          <InputField label="Bairro" name="neighborhood" type="text" />
        </section>
        <TextAreaField label="Observações" name="observations" type="text" />
      </main>
      <section className="actionFormButtons">
        <button className="actionFormButtons_save">Salvar</button>
        <button className="actionFormButtons_cancel">Cancelar</button>
      </section>
    </form>
  );
}
