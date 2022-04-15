import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ReportPage from './pages/ReportPageLayout';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/:id" component={ReportPage} />
                </Switch>
            </Router>
        </div>
    );
}
