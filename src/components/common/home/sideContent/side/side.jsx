import React from "react";
import Heading from "../../../heading/heading";
import SocialMedia from "../social/socialMedia";
import "./side.css";
import Tpost from "../tpost/tpost";

const Side = () => {
  const category = ["world", "travel", "sport", "fun", "health", "fashion", "business"];
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="text" placeholder="Email Address" />
          <button>
            <i className="fa fa-paper-plane" /> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost /> 

      <section className="category">
        <Heading title="category" />
        {category.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          )
        })}
      </section>
    </>
  );

 
};

export default Side;
