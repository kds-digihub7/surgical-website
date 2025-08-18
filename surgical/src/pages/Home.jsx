// src/pages/Home.jsx
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "SurgicalSite | Home";
  }, []);

  return (
    <div>
      <h1>Welcome to SurgicalSite</h1>
      <p>Your trusted source for high-quality surgical products.</p>
    </div>
  );
}

export default Home;
