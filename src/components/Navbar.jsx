import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/mentor" style={{ marginRight: "20px" }}>Mentor</Link>
      <Link to="/presets">Presets</Link>
    </nav>
  )
}

export default Navbar