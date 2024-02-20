import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>Busan is an amazing magazing Blogger theme that is</p>
            <i className="fa fa-envelope"></i>
            <span>hello@gmail.com</span> <br />
            <i className="fa fa-headphones"></i>
            <span>+00000000</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google to boost Security in a few days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Google to boost Security in a few days</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>Google to boost Security in a few days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google to boost Security in a few days</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> 
                <label htmlFor="">(5)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Fashion</span> 
                <label htmlFor="">(6)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Health</span> 
                <label htmlFor="">(7)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Nature</span>
                <label htmlFor="">(8)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
            <p>all right reserved</p>
            <p>made with <i className="fa fa-heart"></i> by hello </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
