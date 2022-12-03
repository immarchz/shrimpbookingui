import React from "react";
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mailContainer">
        <h2>Save time, Save money!</h2>
        <div className="mailBanner">Sign up and we'll send the best deals to you</div>
        <p className="mailInputContainer">
            <input type="text" placeholder="Your email" className="mailInput" />
            <button className="subscribeButton">
                Subscribe
            </button>
        </p>
    </div>
  )
};

export default MailList;
