export function onlyNumbers(value: string): string {
  return value.replace(/\D/g, "");
}
export function validCPF(value: string): boolean {
  let sum = 0;
  let rest;
  value = value.replace(/\D/g, "");
  if (value == "00000000000") return false;
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(value.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(value.substring(10, 11))) return false;
  return true;
}
export function validCNPJ(value: string): boolean {
  value = value.replace(/\D/g, "");
  if (value == "00000000000000") return false;
  if (value.length != 14) return false;
  return true;
}
export function validTel(value: string): boolean {
  value = value.replace(/\D/g, "");
  if (value == "000000000000") return false;
  if (value.length != 12) return false;
  return true;
}
export function validRG(value: string): boolean {
  value = value.replace(/\D/g, "");
  if (value == "0000000") return false;
  if (value.length != 7) return false;
  return true;
}
export function validCEP(value: string): boolean {
  value = value.replace(/\D/g, "");
  if (value == "0000000") return false;
  if (value.length != 8) return false;
  return true;
}
export function MaskTel(value: string): string {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 12);
  value = value.replace(/^(\d{3})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");

  return value;
}
export function MaskCPF(value: string): string {
  if (value == null) return "";
  value = value.replace(/\D/g, "");

  value = value.substring(0, 11);
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");

  return value;
}
export function MaskCNPJ(value: string): string {
  if (value == null) return "";
  value = value.replace(/\D/g, "");

  value = value.substring(0, 14);

  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");

  return value;
}
export function MaskRG(value: string): string {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 7);
  return value;
}
export function MaskCEP(value: string): string {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 8);
  return value;
}
