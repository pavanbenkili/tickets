import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar" style={sidebarStyle}>
      <div style={menuContainer}>

        <Link style={itemStyle} to="/">
          <span style={iconStyle}>🏠</span>
          <span style={labelStyle}>Dashboard</span>
        </Link>

        <Link style={itemStyle} to="/tickets">
          <span style={iconStyle}>🎫</span>
          <span style={labelStyle}>Tickets</span>
        </Link>

        <Link style={itemStyle} to="/incidents">
          <span style={iconStyle}>⚠️</span>
          <span style={labelStyle}>Incidents</span>
        </Link>

        <Link style={itemStyle} to="/projects">
          <span style={iconStyle}>📁</span>
          <span style={labelStyle}>Projects</span>
        </Link>

        <Link style={itemStyle} to="/settings">
          <span style={iconStyle}>⚙️</span>
          <span style={labelStyle}>Settings</span>
        </Link>

      </div>
    </aside>
  );
}

const sidebarStyle = {
  width: "7vw",
  background: "#fff",
  height: "100vh",
  paddingTop: "25px",
  boxShadow: "2px 0 8px rgba(0,0,0,0.08)",
//   display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const menuContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  width: "100%",
};

const itemStyle = {
  textDecoration: "none",
  color: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
};

const iconStyle = {
  fontSize: "25px",
};

const labelStyle = {
  fontSize: "13px",
  marginTop: "5px",
  fontWeight: "500",
};
