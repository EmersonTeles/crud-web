import Link from "next/link";
import { useState } from "react";
import {
  MaskCEP,
  MaskCPF,
  MaskRG,
  MaskTel,
  onlyNumbers,
  validCPF,
} from "../assets/validations";
import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";

type NaturalPerson = {
  type: string;
  name: { content: string; valid: boolean };
  nickname: { content: string; valid: boolean };
  cpf: { content: string; valid: boolean };
  birthDate: { content: string; valid: boolean };
  maritalStatus: { content: string; valid: boolean };
  rg: { content: string; valid: boolean };
  emitter: { content: string; valid: boolean };
  uf: { content: string; valid: boolean };
  cnh: { content: string; valid: boolean };
  security: { content: string; valid: boolean };
  cei: { content: string; valid: boolean };
  email: { content: string; valid: boolean };
  telephone: { content: string; valid: boolean };
  cellphone: { content: string; valid: boolean };
  cep: { content: string; valid: boolean };
  city: { content: string; valid: boolean };
  uf_adress: { content: string; valid: boolean };
  address: { content: string; valid: boolean };
  number: { content: string; valid: boolean };
  complement: { content: string; valid: boolean };
  neighborhood: { content: string; valid: boolean };
  observations: { content: string; valid: boolean };
};

export default function NaturalPerson() {
  const cpfReg = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");
  const [form, setForm] = useState<NaturalPerson>({
    type: "F",
    name: { content: "", valid: true },
    nickname: { content: "", valid: true },
    cpf: { content: "", valid: true },
    birthDate: { content: "", valid: true },
    maritalStatus: { content: "", valid: true },
    rg: { content: "", valid: true },
    emitter: { content: "", valid: true },
    uf: { content: "", valid: true },
    cnh: { content: "", valid: true },
    security: { content: "", valid: true },
    cei: { content: "", valid: true },
    email: { content: "", valid: true },
    telephone: { content: "", valid: true },
    cellphone: { content: "", valid: true },
    cep: { content: "", valid: true },
    city: { content: "", valid: true },
    uf_adress: { content: "", valid: true },
    address: { content: "", valid: true },
    number: { content: "", valid: true },
    complement: { content: "", valid: true },
    neighborhood: { content: "", valid: true },
    observations: { content: "", valid: true },
  });
  function setValue(name: string, value: any) {
    setForm({
      ...form,
      [name]: { content: value },
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    let maskedValue = value;
    if (name === "cpf") {
      maskedValue = MaskCPF(value);
      setValue(name, maskedValue);
    } else if (name === "rg") {
      maskedValue = MaskRG(value);
      setValue(name, maskedValue);
    } else if (name === "telephone" || name === "cellphone") {
      maskedValue = MaskTel(value);
      setValue(name, maskedValue);
    } else if (name === "cep") {
      maskedValue = MaskCEP(value);
      setValue(name, maskedValue);
    } else if (name === "number" || name === "cnh" || name === "security") {
      maskedValue = onlyNumbers(value);
      setValue(name, maskedValue);
    } else {
      setValue(name, value);
    }
  }
  function verifyIsvalid(): boolean {
    let valid = true;
    let validFields = {
      name: true,
      cpf: true,
      email: true,
      cep: true,
      city: true,
      uf_adress: true,
      address: true,
      number: true,
      neighborhood: true,
    };
    if (!validCPF(form.cpf.content)) {
      validFields = { ...validFields, cpf: false };
    }
    if (form.name.content === "") {
      validFields = { ...validFields, name: false };
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
    if (form.uf_adress.content === "") {
      validFields = { ...validFields, uf_adress: false };
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
      cpf: { content: form.cpf.content, valid: validFields.cpf },
      name: { content: form.name.content, valid: validFields.name },
      email: { content: form.email.content, valid: validFields.email },
      cep: { content: form.cep.content, valid: validFields.cep },
      city: { content: form.city.content, valid: validFields.city },
      uf_adress: {
        content: form.uf_adress.content,
        valid: validFields.uf_adress,
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
            value={form.name.content}
            onChange={handleChange}
            valid={form.name.valid}
          />
          <InputField
            label="Apelido"
            name="nickname"
            type="text"
            value={form.nickname.content}
            onChange={handleChange}
          />
          <InputField
            label="CPF"
            name="cpf"
            type="text"
            value={form.cpf.content}
            onChange={handleChange}
            valid={form.cpf.valid}
          />
          <InputField
            label="Data de Nascimento"
            name="birthDate"
            type="date"
            value={form.birthDate.content}
            onChange={handleChange}
          />
          <SelectField
            label="Estado Civil"
            name="maritalStatus"
            Items={MaritalStatus}
            value={form.maritalStatus.content}
            onChange={handleChange}
            valid={form.maritalStatus.valid}
          />
          <InputField
            label="RG/RNE"
            name="rg"
            type="text"
            value={form.rg.content}
            onChange={handleChange}
            valid={form.rg.valid}
          />
          <InputField
            label="Órgão Emissor"
            name="emitter"
            type="text"
            value={form.emitter.content}
            onChange={handleChange}
            valid={form.emitter.valid}
          />
          <SelectField
            label="UF"
            name="uf"
            Items={UFlist}
            value={form.uf.content}
            onChange={handleChange}
            valid={form.uf.valid}
          />
          <InputField
            label="CNH"
            name="cnh"
            type="text"
            value={form.cnh.content}
            onChange={handleChange}
            valid={form.cnh.valid}
          />
          <InputField
            label="Segurança"
            name="security"
            type="text"
            value={form.security.content}
            onChange={handleChange}
            valid={form.security.valid}
          />
          <InputField
            label="CEI"
            name="cei"
            type="text"
            value={form.cei.content}
            onChange={handleChange}
            valid={form.cei.valid}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email.content}
            onChange={handleChange}
            valid={form.email.valid}
          />
          <InputField
            label="Telefone"
            name="telephone"
            type="tel"
            value={form.telephone.content}
            onChange={handleChange}
            valid={form.telephone.valid}
            placeholder="(000) 00000-0000"
          />
          <InputField
            label="Celular"
            name="cellphone"
            type="tel"
            value={form.cellphone.content}
            onChange={handleChange}
            valid={form.cellphone.valid}
            placeholder="(000) 00000-0000"
          />
        </section>
        <section>
          <InputField
            label="CEP"
            name="cep"
            type="text"
            value={form.cep.content}
            onChange={handleChange}
            valid={form.cep.valid}
          />
          <InputField
            label="Cidade"
            name="city"
            type="text"
            value={form.city.content}
            onChange={handleChange}
            valid={form.city.valid}
          />
          <SelectField
            label="UF"
            name="uf_adress"
            Items={UFlist}
            value={form.uf_adress.content}
            onChange={handleChange}
            valid={form.uf_adress.valid}
          />
          <InputField
            label="Endereço"
            name="address"
            type="text"
            value={form.address.content}
            onChange={handleChange}
            valid={form.address.valid}
          />
          <InputField
            label="Número"
            name="number"
            type="text"
            value={form.number.content}
            onChange={handleChange}
            valid={form.number.valid}
          />
          <InputField
            label="Complemento"
            name="complement"
            type="text"
            value={form.complement.content}
            onChange={handleChange}
            valid={form.complement.valid}
          />
          <InputField
            label="Bairro"
            name="neighborhood"
            type="text"
            value={form.neighborhood.content}
            onChange={handleChange}
            valid={form.neighborhood.valid}
          />
        </section>
        <TextAreaField
          label="Observações"
          name="observations"
          type="text"
          value={form.observations.content}
          onChange={handleChange}
          valid={form.observations.valid}
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
