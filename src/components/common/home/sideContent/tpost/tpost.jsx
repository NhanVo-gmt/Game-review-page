import React from "react";
import Heading from "../../../heading/heading";
import { tpost } from "../../../../../dummydata";
import "./tpost.css"

const Tpost = () => {
  return (
    <>
      <section className="tpost">
        <Heading title="Tiktok Post" />
        {tpost.map((val) => {
          return (
            <div className="box flexSB">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
