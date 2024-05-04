import React, { useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    if(newContactList.length === 0) localStorage.clear();
    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)
    setContacts(retriveContacts);
  }, []);

  useEffect(() => {   
    if(contacts.length > 0)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
      <Header/>
        <Routes>        
          <Route exact path="/"  element={ <ContactList contacts={contacts} getContactId = {removeContactHandler}/> } />
          <Route path="/add" element={ <AddContact addContactHandler={addContactHandler}/>} /> 
          <Route path="/contact/:id" element={<ContactDetail/>} />
          <Route path="/delete" element={<DeleteContact contacts={contacts} getContactId = {removeContactHandler}/>} /> 
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId = {removeContactHandler} />       */}
      </Routes>

      </Router>
     </div>
  );
}

export default App;
