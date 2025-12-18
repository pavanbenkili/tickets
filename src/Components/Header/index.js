import {  useContext, useState } from "react";
import { ProjectContext } from "../ProjectContext";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  

  const {setPr} = useContext(ProjectContext);

  const projctsList = [{id:1 , name:'ATS' },{id:2 , name:'WorkForce'},{id:3 , name:'Procurewise'},{id:4 , name:'Health Care'}]

  const onProjectChange = (e) =>{
    // console.log(e.target.value,'project id from header')
    // changeProject(!e.target.value ? 1 : e.target.value)
    setPr(!e.target.value ? 1 : e.target.value)
  }

  const logout = () => {
    console.log('logout')
    localStorage.clear()
    navigate("/", { replace: true });
    
  }

  return (
    <header style={headerStyle}>
      {/* Left Section */}
      <div style={leftContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
          width="32"
          alt="logo"
        />
        <div style={{ position: "relative" }}>
          <select style={productSelect}  onChange={onProjectChange} >
            {projctsList.map(data=>(<option key={data.id} value={data.id}>{data.name}</option>))}
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div style={rightContainer}>
        {/* Search bar placed first */}
        <input type="text" placeholder="Search" style={searchInput} />
        <span style={iconStyle}>🔔</span>

        <div style={{ position: "relative" }}>
          <div style={profileIcon} onClick={() => setOpen(!open)}>
            🧑
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div style={dropdownMenu}>
              <p style={dropdownItem}>Edit Profile</p>
              <p style={dropdownItem}>Recycle Bin</p>
              <p style={dropdownItem}>Out of Office</p>
              <p style={{ ...dropdownItem, borderBottom: "none" }}  onClick={logout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ------------------ Styles ------------------ */

const headerStyle = {
  width: "100%",
  height: "65px",
  background: "#0a63ff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 25px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  position: "sticky",
  top: 0,
  zIndex: 99
};

const leftContainer = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const productSelect = {
  background: "white",
  color: "#0a63ff",
  padding: "5px 15px",
  borderRadius: "8px",
  fontSize: "14px",
  border: "none",
  outline: "none",
  fontWeight: "600",
  cursor: "pointer"
};

const rightContainer = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const searchInput = {
  width: "250px",
  height: "38px",
  borderRadius: "50px",
  border: "none",
  padding: "0 18px",
  fontSize: "14px",
  outline: "none"
};

const iconStyle = {
  fontSize: "20px",
  cursor: "pointer"
};

const profileIcon = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0a63ff",
  cursor: "pointer",
  fontSize: "18px"
};

const dropdownMenu = {
  position: "absolute",
  top: "45px",
  right: 0,
  width: "180px",
  background: "#fff",
  color: "#333",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  padding: "5px 0",
  animation: "fadeIn 0.2s ease-in-out"
};

const dropdownItem = {
  padding: "10px 15px",
  borderBottom: "1px solid #eee",
  cursor: "pointer"
};
