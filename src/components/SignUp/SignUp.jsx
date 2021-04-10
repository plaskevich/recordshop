import "./SignUp.scoped.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function SignUp() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="title-wrap">
          <h3 className="title">Create a new account</h3>
        </div>
        <form action="">
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="email">email</label>
            </span>
            <input name="email" type="email" className="input" />
          </div>
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="name">name</label>
            </span>
            <input name="name" type="text" className="input" />
          </div>
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="password">password</label>
            </span>
            <input name="password" type="password" className="input" />
          </div>
          <div className="form-group">
            <span className="label-wrap">
              <label htmlFor="confirm-password">confirm password</label>
            </span>
            <input name="confirm-password" type="password" className="input" />
          </div>
          <div className="btn-wrap">
            <Link className="enter-btn">enter</Link>
          </div>
        </form>
      </div>
    </>
  );
}
