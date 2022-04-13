import {useSelector, useDispatch} from 'react-redux';
import {selectToken, setKey} from './app/reducers/AuthToken'

async function fetchKey() {
   let response = await fetch("https://cutwise.com/api/oauth/v2/token?grant_type=password&username=demo&password=UqpY3q3yhLs2xFWt&client_id=10_4kcuxoitbkmc4gc4cwkggw04swg0co48ck0soco8w44w8s0c04&client_secret=2zmg3raap64gc8448co0wcg8kwkswswgscwc00ggco880wwk0k")
   response = await response.json()
   return response.access_token
}

export default function App() {

   const token = useSelector(selectToken);

   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Yodawg</h1>
         <h1>{token}</h1>
         <button onClick={async () => {
            dispatch(setKey(await fetchKey()))
         }}>Yodawg</button>
      </div>
   );
}
