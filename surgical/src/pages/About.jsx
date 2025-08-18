import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "SurgicalSite | About";
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>We provide the best surgical instruments with unmatched quality and reliability.</p>
    </div>
  );
}

export default About;
