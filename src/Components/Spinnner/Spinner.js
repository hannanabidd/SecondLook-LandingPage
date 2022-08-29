import React from "react";
import "./Spinner.css";

export default function LoadingSpinner({ height = "100vh" }) {
  return (
    <div style={{ height }} className="spinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
}
