import React, { use, useState } from "react";
import { useEffect } from "react";
import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";
const cardsData = [
    [
  { title: "Unresolved", value: 6036, color: "#2F80ED" },
  { title: "Overdue", value: 283, color: "#EB5757" },
  { title: "Due Today", value: 91, color: "#F2994A" },
  { title: "Open", value: 21, color: "#2F80ED" },
  { title: "On Hold", value: 502, color: "#56CCF2" },
  { title: "Unassigned", value: 48, color: "#27AE60" }
    ],
    [
  { title: "Unresolved", value: 636, color: "#2F80ED" },
  { title: "Overdue", value: 44, color: "#EB5757" },
  { title: "Due Today", value: 91, color: "#F2994A" },
  { title: "Open", value: 2, color: "#2F80ED" },
  { title: "On Hold", value: 50, color: "#56CCF2" },
  { title: "Unassigned", value: 48, color: "#27AE60" }
    ],
    [
  { title: "Unresolved", value: 606, color: "#2F80ED" },
  { title: "Overdue", value: 83, color: "#EB5757" },
  { title: "Due Today", value: 1, color: "#F2994A" },
  { title: "Open", value: 21, color: "#2F80ED" },
  { title: "On Hold", value: 52, color: "#56CCF2" },
  { title: "Unassigned", value: 48, color: "#27AE60" }
    ],
    [
  { title: "Unresolved", value: 6, color: "#2F80ED" },
  { title: "Overdue", value: 23, color: "#EB5757" },
  { title: "Due Today", value: 91, color: "#F2994A" },
  { title: "Open", value: 21, color: "#2F80ED" },
  { title: "On Hold", value: 502, color: "#56CCF2" },
  { title: "Unassigned", value: 48, color: "#27AE60" }
    ]
];


const projectList = {
  1: "ATS",
  2: "WorkForce",
  3: "Procurewise",
  4: "Health Care"
}



const  Dashboard = () =>{

    const [cards,setCards] = useState(cardsData[0])

   const {prId} = useContext(ProjectContext);
   

    useEffect(() => {
        console.log("Dashboard received new project:", prId);
          setCards(cardsData[prId-1])
      }, [prId]);

  

 

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Dashboard -- {projectList[prId]}</h2>

      <div style={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.title}>{card.title}</span>
              <div style={{ ...styles.iconBox, backgroundColor: `${card.color}20` }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: card.color,
                    borderRadius: 4,
                  }}
                ></div>
              </div>
            </div>

            <h2 style={styles.value}>{card.value}</h2>
            <p style={styles.sub}>Analytics for till date</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "20px 30px",
  },
  heading: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "22px",
    borderRadius: 14,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  iconBox: {
    padding: 10,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 32,
    margin: 0,
    fontWeight: 700,
  },
  sub: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
};

export default Dashboard
