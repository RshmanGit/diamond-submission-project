import ResponsiveGrid from "../components/ResponsiveGrid";

import { useEffect, useState } from "react";

import { fetchGrid } from "../utils/updateProductGrid";
import { fetchKey } from "../utils/updateKey";

export default function Homepage() {

  const [ids, setIds] = useState([]);

  useEffect(async() => {
    const { access_token } = await fetchKey();
    if(ids.length <= 0){
      setIds(await fetchGrid(access_token));
    }
  }, [])
  
    return (
      <div className="App" style={{ backgroundColor: "#131313" }}>
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
        <ResponsiveGrid ids={ids} />
      </div>
    );
  }