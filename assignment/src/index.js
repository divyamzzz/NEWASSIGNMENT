import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './pages/Login';
import Users from './pages/Users';
import EditUser from './pages/EditUsers';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from "./pages/UserContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <UserProvider>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      
    </Routes>
   </Router>
   </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
