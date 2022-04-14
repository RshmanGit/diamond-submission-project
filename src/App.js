import { useSelector, useDispatch } from 'react-redux';
import Homepage from "./pages/Homepage";
import ReportPage from './pages/ReportPageLayout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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