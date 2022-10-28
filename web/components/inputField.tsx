export default function InputField(props: any): JSX.Element {
  return (
    <div className="inputField">
      <label htmlFor={props.name}> {props.label} </label>
      <input type={props.type} id={props.name} name={props.label} />
    </div>
  );
}
