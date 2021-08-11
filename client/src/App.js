import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
