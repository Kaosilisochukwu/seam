import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServerPage from "./pages/ServerPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/server">
            <ServerPage />
          </Route>
          <Route path="/application">
            <ApplicationPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
