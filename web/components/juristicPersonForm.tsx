import Link from "next/link";
import { useState } from "react";
import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";

type JuristicPerson = {
  type: string;
  inscriptionName: string;
  companyName: string;
  active: boolean;
  cnpj: string;
  stateInsc: string;
  cityInsc: string;
  contributor: boolean;
  email: string;
  responsible: string;
  cpf: string;
  telephone: string;
  cellphone: string;
  respEmail: string;
  respBirthDate: string;
  cep: string;
  city: string;
  uf: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  observations: string;
};

export function JuristicPerson() {
  const [form, setForm] = useState<JuristicPerson>({
    type: "J",
    inscriptionName: "",
    companyName: "",
    active: false,
    cnpj: "",
    stateInsc: "",
    cityInsc: "",
    contributor: true,
    email: "",
    responsible: "",
    cpf: "",
    telephone: "",
    cellphone: "",
    respEmail: "",
    respBirthDate: "",
    cep: "",
    city: "",
    uf: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    observations: "",
  });

  function setValue(chave: string, valor: any) {
    setForm({
      ...form,
      [chave]: valor,
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValue(name, value);
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(form);
  }
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
          <InputField
            onChange={handleChange}
            label="Razão social"
            name="inscriptionName"
            type="text"
            value={form.inscriptionName}
          />
          <InputField
            onChange={handleChange}
            label="Nome Fantasia"
            name="companyName"
            type="text"
            value={form.companyName}
          />
          <InputField
            label="Ativo"
            name="active"
            type="checkbox"
            checked={form.active}
            defaultChecked={form.active}
            onChange={handleChange}
          />
          <InputField
            onChange={handleChange}
            label="CNPJ"
            name="cnpj"
            type="text"
            value={form.cnpj}
          />
          <InputField
            onChange={handleChange}
            label="Insc. Estadual"
            name="stateInsc"
            type="text"
            value={form.stateInsc}
          />
          <div className="radioField">
            <p>Contribuinte</p>
            <div>
              <input
                type="radio"
                id="contributor"
                name="contributor"
                value="true"
                checked={form.contributor === true}
                onChange={(e) => setForm({ ...form, contributor: true })}
              />
              <label htmlFor="html">Sim</label>
              <input
                type="radio"
                id="contributor"
                name="contributor"
                value="false"
                checked={form.contributor === false}
                onChange={(e) => setForm({ ...form, contributor: false })}
              />
              <label htmlFor="css">Não</label>
            </div>
          </div>
          <InputField
            onChange={handleChange}
            label="Insc. Municipal"
            name="cityInsc"
            type="text"
            value={form.cityInsc}
          />
          <InputField
            onChange={handleChange}
            label="Email"
            name="email"
            type="email"
            value={form.email}
          />
        </section>
        <section>
          <InputField
            onChange={handleChange}
            label="Nome do Responsável"
            name="responsible"
            type="text"
            value={form.responsible}
          />
          <InputField
            onChange={handleChange}
            label="CPF"
            name="cpf"
            type="text"
            value={form.cpf}
          />
          <InputField
            onChange={handleChange}
            label="Data Nasc. Responsável"
            name="respBirthDate"
            type="text"
            value={form.respBirthDate}
          />
          <InputField
            onChange={handleChange}
            label="Telefone"
            name="telephone"
            type="tel"
            value={form.telephone}
          />
          <InputField
            onChange={handleChange}
            label="Celular"
            name="cellphone"
            type="tel"
            value={form.cellphone}
          />
          <InputField
            onChange={handleChange}
            label="Email Responsável"
            name="respEmail"
            type="email"
            value={form.respEmail}
          />
          <InputField
            onChange={handleChange}
            label="CEP"
            name="cep"
            type="text"
            value={form.cep}
          />
          <InputField
            onChange={handleChange}
            label="Cidade"
            name="city"
            type="text"
            value={form.city}
          />
          <SelectField
            onChange={handleChange}
            label="UF"
            name="uf"
            Items={UFlist}
            value={form.uf}
          />
          <InputField
            onChange={handleChange}
            label="Endereço"
            name="address"
            type="text"
            value={form.address}
          />
          <InputField
            onChange={handleChange}
            label="Número"
            name="number"
            type="text"
            value={form.number}
          />
          <InputField
            onChange={handleChange}
            label="Complemento"
            name="complement"
            type="text"
            value={form.complement}
          />
          <InputField
            onChange={handleChange}
            label="Bairro"
            name="neighborhood"
            type="text"
            value={form.neighborhood}
          />
        </section>
        <TextAreaField
          label="Observações"
          name="observations"
          type="text"
          value={form.observations}
          onChange={handleChange}
        />
      </main>
      <section className="actionFormButtons">
        <button
          className="actionFormButtons_save"
          type="submit"
          onClick={handleSubmit}
        >
          Salvar
        </button>
        <button className="actionFormButtons_cancel" type="button">
          <Link href="/">Cancelar</Link>
        </button>
      </section>
    </form>
  );
}
