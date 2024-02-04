
import React from "react";
import Button from "./components/Button"; // Import Button Component
import Alert from "./components/Alert";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="info" />
        <Alert type="success" />
        <Alert type="warning" />
        <Alert type="error" />        
      </div>
    </div>
  );
}

export default App;

