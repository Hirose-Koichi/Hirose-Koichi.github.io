import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <img className="react-logo" src="resources/react-logo.png" alt="react-logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of entrprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
