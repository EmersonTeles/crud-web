import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
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
import api from "../api/api";
import { useRouter } from "next/router";
import { NaturalPersonFormModel } from "../models/naturalPersonModel";

export default function NaturalPerson(props: any): JSX.Element {
  const router = useRouter();
  const [form, setForm] = useState<NaturalPersonFormModel>({
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
    } else if (
      name === "number" ||
      name === "cnh" ||
      name === "security" ||
      name === "cei"
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
      window.alert("Preencha os campos corretamente");
    }
    return valid;
  }
  async function handleSubmit(event: any) {
    event.preventDefault();
    const clientSubmission = {
      type: "F",
      name: form.name.content,
      nickname: form.nickname.content,
      cpf: onlyNumbers(form.cpf.content),
      birthDate: form.birthDate.content,
      maritalStatus: form.maritalStatus.content,
      rg: form.rg.content,
      emitter: form.emitter.content,
      uf: form.uf.content,
      cnh: form.cnh.content,
      security: form.security.content,
      cei: form.cei.content,
      email: form.email.content,
      telephone: onlyNumbers(form.telephone.content),
      cellphone: onlyNumbers(form.cellphone.content),
      cep: form.cep.content,
      city: form.city.content,
      uf_adress: form.uf_adress.content,
      address: form.address.content,
      number: form.number.content,
      complement: form.complement.content,
      neighborhood: form.neighborhood.content,
      observations: form.observations.content,
    };
    if (verifyIsvalid()) {
      try {
        if (props.param === "new") {
          await api.post("/clients", clientSubmission);
        } else {
          await api.put(`/clients/${props.param}`, clientSubmission);
        }
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
  useEffect(() => {
    if (props.param != "new") {
      console.log("entrou: ", props.client);
      setForm({
        ...form,
        name: { content: props.client.name, valid: true },
        nickname: { content: props.client.nickname, valid: true },
        cpf: { content: props.client.cpf, valid: true },
        birthDate: { content: props.client.birthDate, valid: true },
        maritalStatus: { content: props.client.maritalStatus, valid: true },
        rg: { content: props.client.rg, valid: true },
        emitter: { content: props.client.emitter, valid: true },
        uf: { content: props.client.uf, valid: true },
        cnh: { content: props.client.cnh, valid: true },
        security: { content: props.client.security, valid: true },
        cei: { content: props.client.cei, valid: true },
        email: { content: props.client.email, valid: true },
        telephone: { content: props.client.telephone, valid: true },
        cellphone: { content: props.client.cellphone, valid: true },
        cep: { content: props.client.cep, valid: true },
        city: { content: props.client.city, valid: true },
        uf_adress: { content: props.client.uf_adress, valid: true },
        address: { content: props.client.address, valid: true },
        number: { content: props.client.number, valid: true },
        complement: { content: props.client.complement, valid: true },
        neighborhood: { content: props.client.neighborhood, valid: true },
        observations: { content: props.client.observations, valid: true },
      });
    }
  }, [props.param]);
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
