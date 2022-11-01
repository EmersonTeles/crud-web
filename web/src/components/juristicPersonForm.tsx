import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../utils/api";
import {
  MaskCEP,
  MaskCNPJ,
  MaskCPF,
  MaskTel,
  onlyNumbers,
  validCNPJ,
} from "../utils/validations";
import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";
import { JuristicPersonFormModel } from "../models/juristicPersonModel";

export function JuristicPerson(props: any): JSX.Element {
  const router = useRouter();
  const [form, setForm] = useState<JuristicPersonFormModel>({
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
      window.alert("Preencha os campos corretamente");
    }
    return valid;
  }
  async function handleSubmit(event: any) {
    event.preventDefault();
    const clientSubmission = {
      type: "J",
      inscriptionName: form.inscriptionName.content,
      companyName: form.companyName.content,
      cnpj: onlyNumbers(form.cnpj.content),
      email: form.email.content,
      cep: form.cep.content,
      city: form.city.content,
      uf: form.uf.content,
      address: form.address.content,
      number: form.number.content,
      neighborhood: form.neighborhood.content,
      active: form.active.content,
      stateInsc: form.stateInsc.content,
      cityInsc: form.cityInsc.content,
      contributor: form.contributor.content,
      responsible: form.responsible.content,
      cpf: form.cpf.content,
      telephone: onlyNumbers(form.telephone.content),
      cellphone: onlyNumbers(form.cellphone.content),
      respEmail: form.respEmail.content,
      respBirthDate: form.respBirthDate.content,
      complement: form.complement.content,
      observations: form.observations.content,
    };
    if (verifyIsvalid()) {
      try {
        if (props.param === "new") {
          await api.post("/clients", clientSubmission);
        } else {
          await api.put(`/clients/${props.param}`, clientSubmission);
        }
        console.log("sucesso", clientSubmission);
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
        type: "J",
        inscriptionName: { content: props.client.inscriptionName, valid: true },
        companyName: { content: props.client.companyName, valid: true },
        cnpj: { content: props.client.cnpj, valid: true },
        email: { content: props.client.email, valid: true },
        cpf: { content: props.client.cpf, valid: true },
        respEmail: { content: props.client.respEmail, valid: true },
        respBirthDate: { content: props.client.respBirthDate, valid: true },
        contributor: { content: props.client.contributor, valid: true },
        responsible: { content: props.client.responsible, valid: true },
        stateInsc: { content: props.client.stateInsc, valid: true },
        cityInsc: { content: props.client.cityInsc, valid: true },
        active: { content: props.client.active, valid: true },
        telephone: { content: props.client.telephone, valid: true },
        cellphone: { content: props.client.cellphone, valid: true },
        cep: { content: props.client.cep, valid: true },
        city: { content: props.client.city, valid: true },
        uf: { content: props.client.uf_adress, valid: true },
        address: { content: props.client.address, valid: true },
        number: { content: props.client.number, valid: true },
        complement: { content: props.client.complement, valid: true },
        neighborhood: { content: props.client.neighborhood, valid: true },
        observations: { content: props.client.observations, valid: true },
      });
    }
  }, [props.client]);
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
            type="date"
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
