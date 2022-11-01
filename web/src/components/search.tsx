import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  value: string;
  name: string;
  onChange: (params: any) => any;
}

export default function SearchInput({
  value,
  name,
  onChange,
}: SearchInputProps): JSX.Element {
  return (
    <form
      className="search-form"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="search-input"
        placeholder="Digite o que procura.."
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="search-button">
        <BsSearch className="search-icon" aria-hidden="true" />
      </div>
    </form>
  );
}
