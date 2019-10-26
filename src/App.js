import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import ContactListPage from './pages/contact-list-page'
import ContactFormPage from './pages/contact-form-page'

function App() {
  return (
    <div>
      <h1>Contact manager</h1>
      <NavLink exact to="/"></NavLink>
      <NavLink exact to="/contacts/new"></NavLink>
      <Route exact path="/" component={ContactListPage} />
      <Route path="/contacts/new" component={ContactFormPage} />
      <Route path="/contacts/edit/:_id" component={ContactFormPage} />
    </div>
  );
}

export default App;
