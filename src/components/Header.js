import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        record shop
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="link" to="/login">
              <p>Login</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/signup">
              <p>Sign Up</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
