import Header from "../Header/Header";
import "./Login.scoped.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Header current="login" />
      <div className="content">
        <div className="title-wrap">
          <h3 className="title">Login with existing account</h3>
        </div>
        <form action="">
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="email">email</label>
            </span>
            <input type="email" className="input" />
          </div>
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="password">password</label>
            </span>
            <input type="password" className="input" />
          </div>
          <div className="btn-wrap">
            <Link className="enter-btn">enter</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
