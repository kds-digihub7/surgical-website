import React, { useEffect } from "react";

function Catalogue() {
  useEffect(() => {
    document.title = "SurgicalSite | Catalogue";
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>
      <p>Browse our wide range of surgical instruments and medical supplies.</p>
    </div>
  );
}

export default Catalogue;
