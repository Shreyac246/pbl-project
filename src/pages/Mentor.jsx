import { useState } from "react"

function Mentor() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt) return

    setLoading(true)
    setResponse("")

    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      })

      const data = await res.json()
      setResponse(data.result)

    } catch (error) {
      setResponse("Error generating response.")
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Creative Mentor</h1>

      <textarea
        placeholder="Describe what you want to create..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: "15px" }}
      />

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate Guidance"}
      </button>

      <div style={{ marginTop: "30px", whiteSpace: "pre-wrap" }}>
        {response}
      </div>
    </div>
  )
}

export default Mentor