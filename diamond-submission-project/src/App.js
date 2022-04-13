import AuthToken from "./utils/AuthToken";

const accessToken = await AuthToken();
console.log(accessToken);

export default async function App() {
  // const accessToken = await AuthToken();
  // console.log(accessToken);

  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", `${accessToken}`);
  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  };

  fetch("api.cutwise.com/v4/diamond", requestOptions)
    .then((response) => response.text())
    // .then(result => console.log(result))
    .catch((error) => console.log("error", error));
  return <div className="App"></div>;
}
