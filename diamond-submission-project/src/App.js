import ResponsiveGrid from "./components/ResponsiveGrid";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import ReportWidget from "./components/ReportWidget";


export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            
            <Route exact path="/" component={Homepage} />
            <Route path="/:id" component={ReportPage} />
            
          </Switch>
        </Router>
      </div>
    </>
  );
}

function Homepage(props) {
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

function ReportPage() {
  return (
    <div>
       
     <ReportWidget />
    </div>
  )
}


