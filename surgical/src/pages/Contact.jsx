import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "SurgicalSite | Contact";
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: info@surgicalsite.com</p>
      <p>Phone: +92-123456789</p>
      <p>Address: 123 Medical Street, Karachi, Pakistan</p>
    </div>
  );
}

export default Contact;
