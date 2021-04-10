import Header from "../Header/Header";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import "./Landing.scss";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="main">
      <BackgroundVideo />
      <Header />
      <div className="landing-content">
        <div className="main-text">
          <p className="first-line">Start managing your</p>
          <p className="second-line">record store inventory</p>
          <p className="third-line">now</p>
        </div>
        <div className="lets-start">
          <Link to="/signup">
            <button className="start-btn">LET'S GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
