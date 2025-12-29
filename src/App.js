import './App.css';
import Login from './Components/Login/inde';

import {  Route, Routes, useLocation,Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {  useState ,Suspense,lazy} from 'react';
import {ProjectContext} from './Components/ProjectContext';
import ProtectedRoute from './Components/ProtectedRoute';

const itemStyle = {
  textDecoration: "none",
  color: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
};


const Dashboard = lazy(()=>import('./Components/Dashboard'))
const Tickets = lazy(()=>import('./Components/Tickets'))
const Incidents = lazy(()=>import('./Components/Incidents'))
const Project = lazy(()=>import('./Components/Projects'))
const Settings = lazy(()=>import('./Components/Settings'))
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
            <Suspense fallback={(<div style={itemStyle}><img src="loader.png" alt='Loader...'></img></div>)}>
                <Routes>

               <Route path="/login" element={<Login />} />

              
                   <Route element={<ProtectedRoute/>} >
                  <Route path="/"  element={<Dashboard  />} />
                   {/* <Route path="/login" element={<Login />} /> */}
                  <Route path="/dashboard" element={<Navigate to="/" replace />} />
                  <Route path="/tickets"  element={<Tickets />} />
                
                  <Route path="/incidents" element={<Incidents/>} />
                  <Route path="/projects" element={<Project/>} />
                  <Route path="/settings" element={<Settings/>} />
                  </Route>
             

              
            </Routes>
            </Suspense>
            
          </main>
        </div>

      </div>
   
    </ProjectContext.Provider>
  );
}

export default App;
