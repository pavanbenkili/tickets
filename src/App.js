import './App.css';
import Login from './Components/Login/inde';
import Dashboard from './Components/Dashboard';
import Tickets from './Components/Tickets';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {  useState } from 'react';
import Incidents from './Components/Incidents';
import Project from './Components/Projects';
import {ProjectContext} from './Components/ProjectContext';
import Settings from './Components/Settings';


function App() {

  // const [projectId,selectedProjectId]= useState(1)

  const route =  useLocation()
  
  const isLogin = route.pathname.endsWith('login')


  const [prId,setPr] = useState(1);

  // const changeProject = (project_id)=>{
  //   selectedProjectId(project_id)
  // }
  return (
    <ProjectContext.Provider value={{prId,setPr}}> 
  
      <div className="app-container">

       {!isLogin && <Header /> }

        <div className="body-layout">
           {!isLogin && <Sidebar /> }

          <main className="content-area">
            <Routes>
              <Route path="/"  element={<Dashboard  />} />
              <Route path="/tickets"  element={<Tickets />} />
              <Route path="/login" element={<Login />} />
              <Route path="/incidents" element={<Incidents/>} />
              <Route path="/projects" element={<Project/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </main>
        </div>

      </div>
   
    </ProjectContext.Provider>
  );
}

export default App;
