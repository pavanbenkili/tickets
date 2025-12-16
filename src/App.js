import './App.css';
import Login from './Components/Login/inde';
import Dashboard from './Components/Dashboard';
import Tickets from './Components/Tickets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { use, useState } from 'react';

function App() {

  const [projectId,selectedProjectId]= useState(1)

  const changeProject = (project_id)=>{
    selectedProjectId(project_id)
  }
  return (
    <BrowserRouter>
      <div className="app-container">

        <Header changeProject={changeProject}/>

        <div className="body-layout">
          <Sidebar />

          <main className="content-area">
            <Routes>
              <Route path="/"  element={<Dashboard selectedProject={projectId} />} />
              <Route path="/tickets"  element={<Tickets />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
