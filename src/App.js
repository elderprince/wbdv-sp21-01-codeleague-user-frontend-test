import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "../src/components/home";
import Login from "../src/components/login";
import Register from "../src/components/register";
import Profile from "../src/components/profile";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route path="/" exact={true}>
            <HomeScreen/>
          </Route>
          <Route path="/login" exact={true}>
            <Login/>
          </Route>
          <Route path="/register" exact={true}>
            <Register/>
          </Route>
          <Route path="/profile" exact={true}>
            <Profile/>
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
