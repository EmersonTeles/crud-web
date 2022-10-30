export default function InputField(props: any): JSX.Element {
  return (
    <div className="inputField">
      <label htmlFor={props.name}> {props.label} </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
        value={props.value}
        onChange={props.onChange}
      />
      {props.valid !== undefined && !props.valid && <p>Campo inválido!</p>}
    </div>
  );
}
