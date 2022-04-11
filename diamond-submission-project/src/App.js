import React, { useState, useEffect } from "react";

export default function App() {
  
  let accessTokenres=[]

  fetch("https://cutwise.com/api/oauth/v2/token?grant_type=password&username=demo&password=UqpY3q3yhLs2xFWt&client_id=10_4kcuxoitbkmc4gc4cwkggw04swg0co48ck0soco8w44w8s0c04&client_secret=2zmg3raap64gc8448co0wcg8kwkswswgscwc00ggco880wwk0k")
    .then(response => response.json())
    .then(result => console.log(result))
    .then(accessTokenData=>{
      accessTokenres.push(accessTokenData)
    })
    .catch(error => console.log('error', error));



  useEffect(() => {
 
  }, []);
  return (
    <div className="App">
       <p>{accessTokenres}</p>
    </div>
  );
};