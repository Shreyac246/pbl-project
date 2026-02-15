function BottomNav({ setScreen }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#F4C430",
        padding: "14px 50px",
        borderRadius: "60px",
        display: "flex",
        alignItems: "center",
        gap: "35px",
        fontStyle: "italic"
      }}
    >
      <button onClick={() => setScreen("home")} style={btnStyle}>
        Home
      </button>

      <button onClick={() => setScreen("mentor")} style={btnStyle}>
        Mentor
      </button>

      <button onClick={() => setScreen("presets")} style={btnStyle}>
        Presets
      </button>

      <div
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "#B22222",
          opacity: 0.5
        }}
      />

      <button
        onClick={() => setScreen("create")}
        style={{
          backgroundColor: "#B22222",
          color: "#F4C430",
          border: "none",
          padding: "8px 20px",
          borderRadius: "30px",
          cursor: "pointer",
          fontStyle: "italic"
        }}
      >
        + New Project
      </button>
    </div>
  )
}

const btnStyle = {
  background: "none",
  border: "none",
  color: "#B22222",
  cursor: "pointer",
  fontStyle: "italic"
}

export default BottomNav