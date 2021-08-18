import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home.jsx";
import Activity from "./components/Activity/Activity.jsx";
import CountryDetails from "./components/CountryDetails/CountryDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
        <div>          
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/activity" component={Activity} style={{all: 'unset'}}/>
          <Route excat path="/home/:id" component={CountryDetails} />
        </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
