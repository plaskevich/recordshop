import Header from "../Header/Header";
import "./Landing.scss";
import spray from "./assets/spray.png";
import spray2 from "./assets/spray2.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <div className="content">
          <div className="block">
            <span className="import-directly">import directly</span>
            <span className="from">from</span>
            <span className="discogs">Discogs</span>
            <img src={spray} alt="spray-background" className="spray" />
          </div>

          <div className="block">
            <span className="manage-your">manage your</span>
            <span className="record-store">record store</span>
            <span className="inventory">inventory</span>
            <img src={spray2} alt="spray-background" className="spray2" />
          </div>
        </div>
        <div className="register-wrap">
          <span className="rac">Register and create</span>
          <span className="ysff">your store for free</span>
        </div>
        <div className="sign-up">
          <Link to="/signup">sign up now</Link>
        </div>
      </div>
    </div>
  );
}
