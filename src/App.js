import "./App.css";
import Content from "./components/content/Content";
import Lower from "./components/menu/lower/Lower";
import Upper from "./components/menu/upper/Upper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notification from "./components/pages/Notification";
import UserProfile from "./components/pages/UserProfile";
import Transaction from "./components/pages/Transaction";
import Wallet from "./components/pages/Wallet";
import Market from "./components/pages/Market";
import Earn from "./components/pages/Earn";

function App() {
  return (
    <Router>
      <div className="App">
        <Upper />
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/user" component={UserProfile} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/market" component={Market} />
          <Route path="/earn" component={Earn} />
          <Route path="/notification" component={Notification} />
        </Switch>
        <Lower />
      </div>
    </Router>
  );
}

export default App;
