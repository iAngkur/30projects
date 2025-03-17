import React from "react";
import Alert from "../components/Alert";

function Alerts() {
  return (
    <div className="container">
      <Alert message="Default Alert" />
      <Alert type="success" message="Successful Alert" />
      <Alert type="danger" message="Unsucessful Alert" />
      <Alert
        type="warning"
        message="Warning Alert"
        delay={true}
        delayTime={4000}
      />
    </div>
  );
}

export default Alerts;
