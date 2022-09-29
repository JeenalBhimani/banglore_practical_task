import React from 'react'

//import components
import Auth from './componants/auth'
import UserList from './componants/userList'

//import css
import './assets/css/style.css'

//tostify css
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App