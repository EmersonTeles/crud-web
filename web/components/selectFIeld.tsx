export default function SelectField(props: any): JSX.Element {
  return (
    <div className="inputField">
      <label htmlFor={props.label}>{props.label} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="">Selecione</option>
        {props?.Items?.map((item: string, index: number) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {props.valid !== undefined && !props.valid && <p>Campo inválido!</p>}
    </div>
  );
}
