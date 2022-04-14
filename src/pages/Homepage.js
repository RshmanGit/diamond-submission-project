import ResponsiveGrid from "../components/ResponsiveGrid";

export default function Homepage(props) {
    return (
      <div className="App" style={{ backgroundColor: "#333" }}>
        <div
          style={{
            color: "white",
            border: "2px",
            display: "flex",
            marginBottom: "2%",
          }}
        >
          <h1 style={{ marginRight: "20%", marginLeft: "2%" }}>
            Cutw<span style={{ color: "orange" }}>i</span>se
          </h1>
          <h1>DiBox 2.0 Performance Collection</h1>
        </div>
        <ResponsiveGrid a={["333", "222", "111"]} />
      </div>
    );
  }