import ResponsiveGrid from "./components/ResponsiveGrid";
import AuthToken from "./utils/AuthToken";
import Iframe from "react-iframe";

// const accessToken = await AuthToken();
// console.log(accessToken);

export default function App() {
  // const accessToken = await AuthToken();
  // console.log(accessToken);

  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", `${accessToken}`);
  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };

  // fetch("api.cutwise.com/v4/diamond", requestOptions)
  //   .then((response) => response.text())
  //   // .then(result => console.log(result))
  //   .catch((error) => console.log("error", error));

  return (
    <div className="App" style={{ backgroundColor: "#333" }}>
      <div style={{ color: "white", border:"2px" , display:"flex", marginBottom:"2%"}}>
        <h1 style={{marginRight:"20%", marginLeft:"2%"}}>
          Cutw<span style={{ color: "orange" }}>i</span>se  
        </h1>
        <h1 >
          DiBox 2.0 Performance Collection
        </h1>
      </div>
      <ResponsiveGrid a={["333", "222", "111"]} />
    </div>
  );
}
