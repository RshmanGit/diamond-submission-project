import React, { useState, useEffect } from "react";

export default function App() {
  const CUTWISE_CLIENT_ID =
    "10_4kcuxoitbkmc4gc4cwkggw04swg0co48ck0soco8w44w8s0c04";
  const CUTWISE_CLIENT_SECRET =
    "2zmg3raap64gc8448co0wcg8kwkswswgscwc00ggco880wwk";
  const CUTWISE_LOGIN = "demo";
  const CUTWISE_PASSWORD = "UqpY3q3yhLs2xFWt";
  const [accessToken, setAccessToken] = useState([]);

  const fetchPost = async () => {
	  console.log({
		CUTWISE_CLIENT_ID,
		CUTWISE_CLIENT_SECRET,
		CUTWISE_LOGIN,
		CUTWISE_PASSWORD
	  })
    const response = await fetch(
      `https://cutwise.com/api/oauth/v2/token?grant_type=password&username=${CUTWISE_LOGIN}&password=${CUTWISE_PASSWORD}&client_id=${CUTWISE_CLIENT_ID}&client_secret=${CUTWISE_CLIENT_SECRET}`
    );
    const data = await response.json();
    setAccessToken(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      <p> {accessToken.value} </p>
    </div>
  );
}
