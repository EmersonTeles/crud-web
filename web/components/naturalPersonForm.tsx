import Link from "next/link";
import { useState } from "react";
import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";

type NaturalPerson = {
  type: string;
  name: string;
  nickname: string;
  cpf: string;
  birthDate: string;
  maritalStatus: string;
  rg: string;
  emitter: string;
  uf: string;
  cnh: string;
  security: string;
  cei: string;
  email: string;
  telephone: string;
  cellphone: string;
  cep: string;
  city: string;
  uf_adress: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  observations: string;
};

export default function NaturalPerson() {
  const [form, setForm] = useState<NaturalPerson>({
    type: "F",
    name: "",
    nickname: "",
    cpf: "",
    birthDate: "",
    maritalStatus: "",
    rg: "",
    emitter: "",
    uf: "",
    cnh: "",
    security: "",
    cei: "",
    email: "",
    telephone: "",
    cellphone: "",
    cep: "",
    city: "",
    uf_adress: "",
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
    const { name, value } = event.target;
    setValue(name, value);
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(form);
  }
  const MaritalStatus = [
    "Solteiro",
    "Casado",
    "Divorciado",
    "Viúvo",
    "Separado",
  ];
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
            label="Nome Completo"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Apelido"
            name="nickname"
            type="text"
            value={form.nickname}
            onChange={handleChange}
          />
          <InputField
            label="CPF"
            name="cpf"
            type="text"
            value={form.cpf}
            onChange={handleChange}
          />
          <InputField
            label="Data de Nascimento"
            name="birthDate"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
          />
          <SelectField
            label="Estado Civil"
            name="maritalStatus"
            Items={MaritalStatus}
            value={form.maritalStatus}
            onChange={handleChange}
          />
          <InputField
            label="RG/RNE"
            name="rg"
            type="text"
            value={form.rg}
            onChange={handleChange}
          />
          <InputField
            label="Órgão Emissor"
            name="emitter"
            type="text"
            value={form.emitter}
            onChange={handleChange}
          />
          <SelectField
            label="UF"
            name="uf"
            Items={UFlist}
            value={form.uf}
            onChange={handleChange}
          />
          <InputField
            label="CNH"
            name="cnh"
            type="text"
            value={form.cnh}
            onChange={handleChange}
          />
          <InputField
            label="Segurança"
            name="security"
            type="text"
            value={form.security}
            onChange={handleChange}
          />
          <InputField
            label="CEI"
            name="cei"
            type="text"
            value={form.cei}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <InputField
            label="Telefone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
          />
          <InputField
            label="Celular"
            name="cellphone"
            type="tel"
            value={form.cellphone}
            onChange={handleChange}
          />
        </section>
        <section>
          <InputField
            label="CEP"
            name="cep"
            type="text"
            value={form.cep}
            onChange={handleChange}
          />
          <InputField
            label="Cidade"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
          />
          <SelectField
            label="UF"
            name="uf_adress"
            Items={UFlist}
            value={form.uf_adress}
            onChange={handleChange}
          />
          <InputField
            label="Endereço"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
          />
          <InputField
            label="Número"
            name="number"
            type="text"
            value={form.number}
            onChange={handleChange}
          />
          <InputField
            label="Complemento"
            name="complement"
            type="text"
            value={form.complement}
            onChange={handleChange}
          />
          <InputField
            label="Bairro"
            name="neighborhood"
            type="text"
            value={form.neighborhood}
            onChange={handleChange}
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
        <button className="actionFormButtons_cancel">
          <Link href="/">Cancelar</Link>
        </button>
      </section>
    </form>
  );
}
