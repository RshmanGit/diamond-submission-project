import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from './app/reducers/AuthToken'
import { selectValidity } from './app/reducers/Validity';
import { updateKey } from './utils/fetchAPIKey'

export default function App() {
   // let token = useSelector(selectToken);
   // let validity = useSelector(selectValidity)
   // updateKey(token, validity,  useDispatch())

   return (
      <div className="App">
         <h1>Yodawg</h1>
      </div>
   );
}
