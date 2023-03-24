import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1> My first test </h1>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2> Test </h2>;
const Message = () => <p> This is my message! </p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
