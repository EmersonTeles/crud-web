export default function TextAreaField(props: any): JSX.Element {
  return (
    <div className="inputField">
      <label htmlFor={props.name}> {props.label} </label>
      <textarea
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
