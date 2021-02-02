import Login from './pages/LoginPage/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard'
import Board from "./pages/Board/Board";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route  path='/Login' component={Login} />
          <Route  path='/AdminDashboard' component={AdminDashboard} />
          <Route  path='/EmployeeDashboard' component={EmployeeDashboard} />
          <Route  path='/Board' component={Board} />
          
          {/* <Redirect from="/" to="/Login" /> */}
        </Switch>
      </Router>
      


        
    </div>
  );
}
 
export default App;
