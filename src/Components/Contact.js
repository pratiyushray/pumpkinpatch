import React from "react";
import "../Components/Contact.css";

function Contact() {
  return (
    <div className="fiContainer">
      <div>
        <div className="contactHeading">
          <h6>CONTACT US</h6>
        </div>
      </div>
      <div className="googleForm">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSedxaZYrfmyBMrXJ7qZ4zNkT2topdl_zFs4MHmq9ocLJNvXHA/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
