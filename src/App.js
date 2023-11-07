import React from 'react';

import NavBar from './Components/NavBAr/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './Components/Contacts/Contact-List/ContactList';
import AddContact from './Components/Contacts/Add-Contact/AddContact';
import ViewContact from './Components/Contacts/View-Contact/ViewContact';
import EditContact from './Components/Contacts/Edit-Contact/EditContact';
import Spinner from './Components/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      {/* <Spinner/> */}
     <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path ={'/'} element = {<Navigate to={'/Contacts/list'}/>}/>
        <Route path={'/Contacts/list'} element = {<ContactList/>}/>
        <Route path={'/Contacts/add'} element = {<AddContact/>}/>
        <Route path={'/Contacts/view/:contactId'} element = {<ViewContact/>}/>
        <Route path = {'/Contacts/edit/:contactId'} element = {<EditContact/>}/>
      </Routes>
     </React.Fragment>                                                                                   
    </div>
  );
}
// import ContactList from './Components/Contacts/Contact-List/ContactList';
// import AddContact from './Components/Contacts/Add-Contact/AddContact';
// import ViewContact from './Components/Contacts/View-Contact/ViewContact';

export default App;
