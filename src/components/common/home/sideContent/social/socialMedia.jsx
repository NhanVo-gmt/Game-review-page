import React from "react";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <div className="socBox">
          <i className="fab fa-facebook-f" />
          <span>12,000 Likes</span>
        </div>
        <div className="socBox">
          <i className="fab fa-pinterest" />
          <span>12,000 Fans</span>
        </div>
        <div className="socBox">
          <i className="fab fa-twitter" />
          <span>12,000 Followers</span>
        </div>
        <div className="socBox">
          <i className="fab fa-youtube" />
          <span>12,000 Subscribers</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
