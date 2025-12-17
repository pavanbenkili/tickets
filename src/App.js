import './App.css';
import Login from './Components/Login/inde';
import Dashboard from './Components/Dashboard';
import Tickets from './Components/Tickets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {  useState } from 'react';
import Incidents from './Components/Incidents';
import Project from './Components/Projects';
import {ProjectContext} from './Components/ProjectContext';

function App() {

  // const [projectId,selectedProjectId]= useState(1)

  const [prId,setPr] = useState(1);

  // const changeProject = (project_id)=>{
  //   selectedProjectId(project_id)
  // }
  return (
    <ProjectContext.Provider value={{prId,setPr}}> 
    <BrowserRouter>
      <div className="app-container">

        <Header />

        <div className="body-layout">
          <Sidebar />

          <main className="content-area">
            <Routes>
              <Route path="/"  element={<Dashboard  />} />
              <Route path="/tickets"  element={<Tickets />} />
              <Route path="/login" element={<Login />} />
              <Route path="/incidents" element={<Incidents/>} />
              <Route path="/projects" element={<Project/>} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
    </ProjectContext.Provider>
  );
}

export default App;
