import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  value: string;
  name: string;
  onChange: (params: any) => any;
  onSubmit: (params: any) => any;
}

export default function SearchInput({
  value,
  name,
  onChange,
  onSubmit,
}: SearchInputProps): JSX.Element {
  return (
    <form className="search-form" method="POST" onSubmit={onSubmit}>
      <input
        type="search"
        className="search-input"
        placeholder="Digite o que procura.."
        name={name}
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="search-button">
        <BsSearch className="search-icon" aria-hidden="true" />
      </button>
    </form>
  );
}
