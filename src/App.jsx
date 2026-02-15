import { useState } from "react"
import Home from "./pages/Home"
import Mentor from "./pages/Mentor"
import Presets from "./pages/Presets"
import BottomNav from "./components/BottomNav"

function App() {
  const [screen, setScreen] = useState("home")

  return (
    <>
      {screen === "home" && <Home />}
      {screen === "mentor" && <Mentor />}
      {screen === "presets" && <Presets />}
      {screen === "create" && <CreateProject />}

      <BottomNav setScreen={setScreen} />
    </>
  )
}

function CreateProject() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#B22222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#F4C430",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontStyle: "italic",
          marginBottom: "40px"
        }}
      >
        Create A Project
      </h1>

      <input
        placeholder="Project Name"
        style={{
          padding: "15px 25px",
          width: "320px",
          borderRadius: "40px",
          border: "none",
          marginBottom: "20px"
        }}
      />

      <button
        style={{
          padding: "12px 30px",
          borderRadius: "40px",
          backgroundColor: "#F4C430",
          color: "#B22222",
          border: "none",
          fontStyle: "italic",
          cursor: "pointer"
        }}
      >
        Begin
      </button>
    </div>
  )
}

export default App