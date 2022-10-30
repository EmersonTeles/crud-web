export default function NavBar(props: any): JSX.Element {
  return (
    <nav className="navBar">
      <h1 className="navBar-title">{props.title}</h1>
    </nav>
  );
}
