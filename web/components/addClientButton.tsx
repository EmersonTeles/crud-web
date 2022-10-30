import Link from "next/link";
import { BsPlusCircle } from "react-icons/bs";

export default function AddClientButton(): JSX.Element {
  return (
    <Link className="addClientButton" href="/costumerRegister/new">
      <BsPlusCircle /> Cliente
    </Link>
  );
}
