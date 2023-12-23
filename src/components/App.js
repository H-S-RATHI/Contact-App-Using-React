import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact.jsx";
import ContactList from "./ContactList.js";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
