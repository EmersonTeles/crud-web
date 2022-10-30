import Link from "next/link";
import { useState } from "react";
import {
  MaskCEP,
  MaskCNPJ,
  MaskCPF,
  MaskTel,
  onlyNumbers,
  validCNPJ,
} from "../assets/validations";
import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";

type JuristicPerson = {
  type: string;
  inscriptionName: { content: string; valid: boolean };
  companyName: { content: string; valid: boolean };
  active: { content: boolean; valid: boolean };
  cnpj: { content: string; valid: boolean };
  stateInsc: { content: string; valid: boolean };
  cityInsc: { content: string; valid: boolean };
  contributor: { content: boolean; valid: boolean };
  email: { content: string; valid: boolean };
  responsible: { content: string; valid: boolean };
  cpf: { content: string; valid: boolean };
  telephone: { content: string; valid: boolean };
  cellphone: { content: string; valid: boolean };
  respEmail: { content: string; valid: boolean };
  respBirthDate: { content: string; valid: boolean };
  cep: { content: string; valid: boolean };
  city: { content: string; valid: boolean };
  uf: { content: string; valid: boolean };
  address: { content: string; valid: boolean };
  number: { content: string; valid: boolean };
  complement: { content: string; valid: boolean };
  neighborhood: { content: string; valid: boolean };
  observations: { content: string; valid: boolean };
};

export function JuristicPerson() {
  const [form, setForm] = useState<JuristicPerson>({
    type: "J",
    inscriptionName: { content: "", valid: true },
    companyName: { content: "", valid: true },
    active: { content: false, valid: true },
    cnpj: { content: "", valid: true },
    stateInsc: { content: "", valid: true },
    cityInsc: { content: "", valid: true },
    contributor: { content: false, valid: true },
    email: { content: "", valid: true },
    responsible: { content: "", valid: true },
    cpf: { content: "", valid: true },
    telephone: { content: "", valid: true },
    cellphone: { content: "", valid: true },
    respEmail: { content: "", valid: true },
    respBirthDate: { content: "", valid: true },
    cep: { content: "", valid: true },
    city: { content: "", valid: true },
    uf: { content: "", valid: true },
    address: { content: "", valid: true },
    number: { content: "", valid: true },
    complement: { content: "", valid: true },
    neighborhood: { content: "", valid: true },
    observations: { content: "", valid: true },
  });

  function setValue(chave: string, value: any) {
    setForm({
      ...form,
      [chave]: { content: value },
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked } = event.target;
    let maskedValue = value;
    if (name === "active") {
      setValue(name, checked);
    } else if (name === "cpf") {
      maskedValue = MaskCPF(value);
      setValue(name, maskedValue);
    } else if (name === "cnpj") {
      maskedValue = MaskCNPJ(value);
      setValue(name, maskedValue);
    } else if (name === "cep") {
      maskedValue = MaskCEP(value);
      setValue(name, maskedValue);
    } else if (name === "telephone" || name === "cellphone") {
      maskedValue = MaskTel(value);
      setValue(name, maskedValue);
    } else if (
      name === "number" ||
      name === "cityInsc" ||
      name === "stateInsc"
    ) {
      maskedValue = onlyNumbers(value);
      setValue(name, maskedValue);
    } else {
      setValue(name, value);
    }
  }
  function verifyIsvalid(): boolean {
    let valid = true;
    let validFields = {
      companyName: true,
      cnpj: true,
      email: true,
      cep: true,
      city: true,
      uf: true,
      address: true,
      number: true,
      neighborhood: true,
    };
    if (!validCNPJ(form.cnpj.content)) {
      validFields = { ...validFields, cnpj: false };
    }
    if (form.companyName.content === "") {
      validFields = { ...validFields, companyName: false };
    }
    if (form.email.content === "") {
      validFields = { ...validFields, email: false };
    }
    if (form.cep.content === "") {
      validFields = { ...validFields, cep: false };
    }
    if (form.city.content === "") {
      validFields = { ...validFields, city: false };
    }
    if (form.uf.content === "") {
      validFields = { ...validFields, uf: false };
    }
    if (form.address.content === "") {
      validFields = { ...validFields, address: false };
    }
    if (form.number.content === "") {
      validFields = { ...validFields, number: false };
    }
    if (form.neighborhood.content === "") {
      validFields = { ...validFields, neighborhood: false };
    }
    setForm({
      ...form,
      cnpj: { content: form.cnpj.content, valid: validFields.cnpj },
      companyName: {
        content: form.companyName.content,
        valid: validFields.companyName,
      },
      email: { content: form.email.content, valid: validFields.email },
      cep: { content: form.cep.content, valid: validFields.cep },
      city: { content: form.city.content, valid: validFields.city },
      uf: {
        content: form.uf.content,
        valid: validFields.uf,
      },
      address: { content: form.address.content, valid: validFields.address },
      number: { content: form.number.content, valid: validFields.number },
      neighborhood: {
        content: form.neighborhood.content,
        valid: validFields.neighborhood,
      },
    });
    valid = Object.entries(validFields).every(([, value]) => value);
    if (!valid) {
      console.log("invalid");
      window.alert("Preencha os campos corretamente");
    }
    return valid;
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    verifyIsvalid();
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
            valid={form.inscriptionName.valid}
            value={form.inscriptionName.content}
          />
          <InputField
            onChange={handleChange}
            label="Nome Fantasia"
            name="companyName"
            type="text"
            valid={form.companyName.valid}
            value={form.companyName.content}
          />
          <InputField
            label="Ativo"
            name="active"
            type="checkbox"
            checked={form.active.content}
            defaultChecked={form.active.content}
            onChange={handleChange}
          />
          <InputField
            onChange={handleChange}
            label="CNPJ"
            name="cnpj"
            type="text"
            valid={form.cnpj.valid}
            value={form.cnpj.content}
          />
          <InputField
            onChange={handleChange}
            label="Insc. Estadual"
            name="stateInsc"
            type="text"
            valid={form.stateInsc.valid}
            value={form.stateInsc.content}
          />
          <div className="radioField">
            <p>Contribuinte</p>
            <div>
              <input
                type="radio"
                id="contributor"
                name="contributor"
                value="true"
                checked={form.contributor.content === true}
                onChange={(e) =>
                  setForm({
                    ...form,
                    ["contributor"]: { content: true, valid: true },
                  })
                }
              />
              <label htmlFor="html">Sim</label>
              <input
                type="radio"
                id="contributor"
                name="contributor"
                value="false"
                checked={form.contributor.content === false}
                onChange={(e) =>
                  setForm({
                    ...form,
                    ["contributor"]: { content: false, valid: true },
                  })
                }
              />
              <label htmlFor="css">Não</label>
            </div>
          </div>
          <InputField
            onChange={handleChange}
            label="Insc. Municipal"
            name="cityInsc"
            type="text"
            valid={form.cityInsc.valid}
            value={form.cityInsc.content}
          />
          <InputField
            onChange={handleChange}
            label="Email"
            name="email"
            type="email"
            valid={form.email.valid}
            value={form.email.content}
          />
        </section>
        <section>
          <InputField
            onChange={handleChange}
            label="Nome do Responsável"
            name="responsible"
            type="text"
            valid={form.responsible.valid}
            value={form.responsible.content}
          />
          <InputField
            onChange={handleChange}
            label="CPF"
            name="cpf"
            type="text"
            valid={form.cpf.valid}
            value={form.cpf.content}
          />
          <InputField
            onChange={handleChange}
            label="Data Nasc. Responsável"
            name="respBirthDate"
            type="text"
            valid={form.respBirthDate.valid}
            value={form.respBirthDate.content}
          />
          <InputField
            onChange={handleChange}
            label="Telefone"
            name="telephone"
            type="tel"
            valid={form.telephone.valid}
            value={form.telephone.content}
          />
          <InputField
            onChange={handleChange}
            label="Celular"
            name="cellphone"
            type="tel"
            valid={form.cellphone.valid}
            value={form.cellphone.content}
          />
          <InputField
            onChange={handleChange}
            label="Email Responsável"
            name="respEmail"
            type="email"
            valid={form.respEmail.valid}
            value={form.respEmail.content}
          />
          <InputField
            onChange={handleChange}
            label="CEP"
            name="cep"
            type="text"
            valid={form.cep.valid}
            value={form.cep.content}
          />
          <InputField
            onChange={handleChange}
            label="Cidade"
            name="city"
            type="text"
            valid={form.city.valid}
            value={form.city.content}
          />
          <SelectField
            onChange={handleChange}
            label="UF"
            name="uf"
            Items={UFlist}
            valid={form.uf.valid}
            value={form.uf.content}
          />
          <InputField
            onChange={handleChange}
            label="Endereço"
            name="address"
            type="text"
            valid={form.address.valid}
            value={form.address.content}
          />
          <InputField
            onChange={handleChange}
            label="Número"
            name="number"
            type="text"
            valid={form.number.valid}
            value={form.number.content}
          />
          <InputField
            onChange={handleChange}
            label="Complemento"
            name="complement"
            type="text"
            valid={form.complement.valid}
            value={form.complement.content}
          />
          <InputField
            onChange={handleChange}
            label="Bairro"
            name="neighborhood"
            type="text"
            valid={form.neighborhood.valid}
            value={form.neighborhood.content}
          />
        </section>
        <TextAreaField
          label="Observações"
          name="observations"
          type="text"
          value={form.observations.content}
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
