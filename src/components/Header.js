import { act } from "react-dom/test-utils";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>#VANLIFE</h1>
      </Link>

      <nav>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
}
