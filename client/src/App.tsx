import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './containers/Dashboard'
import LoginPage from './components/LoginPage/LoginPage'
import AuthCheck from './components/LoginPage/LocalStorageAuthchecked';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="app-body">
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<AuthCheck />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;