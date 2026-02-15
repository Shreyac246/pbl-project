function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#B22222",
        color: "#F4C430"
      }}
    >

      {/* 🕊 Bird in Center */}
      <img
        src={`${import.meta.env.BASE_URL}bird.png`}
  alt="bird"
        style={{
          position: "absolute",
          width: "300px",
          opacity: 0.9,
          zIndex: 0
        }}
      />

      {/* 🟡 Text Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "80px",
            fontStyle: "italic",
            margin: 0
          }}
        >
          The Creative Studio
        </h1>

        <p
          style={{
            marginTop: "30px",
            fontSize: "16px",
            color: "#F8E9D2"
          }}
        >
          A field guide for designers and editors
          who prefer craft over automation.
        </p>
        
      </div>

    </div>
  )
}

export default Home
