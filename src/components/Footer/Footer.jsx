import React from "react";
import "../Footer/Footer.css";
import Cone from "../../../src/assets/desktop/image-gallery-cone.jpg";
import Bottle from "../../../src/assets/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../../src/assets/desktop/image-gallery-orange.jpg";
import SugarCube from "../../../src/assets/desktop/image-gallery-sugarcubes.jpg";
import Facebook from "../../../src/assets/icon-facebook.svg";
import Twitter from "../../../src/assets/icon-twitter.svg";
import Instagram from "../../../src/assets/icon-instagram.svg";
import Pinterest from "../../../src/assets/icon-pinterest.svg";
function Footer() {
  return (
    <div>
      <div className="img-cont">
        <img src={Cone} className="food-img" alt="cono" />

        <img src={Bottle} className="food-img" alt="botella" />
        <img src={Orange} className="food-img" alt="naranja" />
        <img src={SugarCube} className="food-img" alt="cubo" />
      </div>
      <div>
        <footer>
          <h3>sunnyside</h3>
          <div className="bot-nav">
            <span className="bot-item">About</span>
            <span className="bot-item">Services</span>
            <span className="bot-item">Projects</span>
          </div>
          <div className="bot-icons">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={Pinterest} alt="pinterest" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
