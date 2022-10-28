import InputField from "./inputField";
import SelectField from "./selectFIeld";
import TextAreaField from "./textAreaField";

export default function NaturalPerson() {
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
          <InputField label="Nome Completo" name="name" type="text" />
          <InputField label="Apelido" name="nickname" type="text" />
          <InputField label="CPF" name="cpf" type="text" />
          <InputField label="Data de Nascimento" name="birthDate" type="date" />
          <SelectField
            label="Estado Civil"
            name="maritalStatus"
            Items={MaritalStatus}
          />
          <InputField label="RG/RNE" name="rg" type="text" />
          <InputField label="Órgão Emissor" name="emitter" type="text" />
          <SelectField label="UF" name="uf" Items={UFlist} />
          <InputField label="CNH" name="cnh" type="text" />
          <InputField label="Segurança" name="security" type="text" />
          <InputField label="CEI" name="cei" type="text" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Telefone" name="phone" type="tel" />
          <InputField label="Celular" name="cellphone" type="tel" />
        </section>
        <section>
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
