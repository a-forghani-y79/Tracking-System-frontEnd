import Login from './pages/LoginPage/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route  path='/Login' component={Login} />
          <Route  path='/dashboard' component={AdminDashboard} />
              
          
          {/* <Redirect from="/" to="/Login" /> */}
        </Switch>
      </Router>
      


        
    </div>
  );
}
 
export default App;
