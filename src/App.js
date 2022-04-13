import {useSelector, useDispatch} from 'react-redux';
import {selectToken, setKey} from './app/reducers/AuthToken'
import {fetchKey} from './utils/fetchAPIKey'

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
