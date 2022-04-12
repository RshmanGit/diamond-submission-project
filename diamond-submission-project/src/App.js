import AuthToken, { a } from './utils/AuthToken'

export default function App() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer MzM5NzQ5OTg2MmEzZjViNzY0ODQwMjRlMzhmZjgyZWZhNzYxMmI4N2FhYmEwN2Q3Nzk0MGI3OGYyNzY4MDlkZA");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("api.cutwise.com/v4/diamond", requestOptions)
    .then(response => response.text())
    // .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return (
   <div className="App">

   </div>
    
    );
}
