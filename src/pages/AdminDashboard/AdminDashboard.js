import React, { Component } from 'react'
import SideBar from "../../components/Admin/SideBar/SideBar"

import Home from "../../layouts/AdminLayouts/home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import TeamPage from "../../layouts/AdminLayouts/TeamPage";
import './Admin.css'
import CreateTeamForm from "../../components/Admin/CreateTeam/CreateTeamForm";
import PerformanceEvaluation from "../../layouts/AdminLayouts/PerformanceEvaluation";
import EmployeesList from "../../layouts/AdminLayouts/EmployeesList";

class AdminDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>

                <div className='main-container'>
                    {/* <Router>
                    <Switch>
                        <Route exact path='/dashboard/' component={Home}/>
                        <Route exact path='/dashboard/' component={TeamPage}/>
                        <Route exact path='/dashboard/' component={CreateTeamForm}/>
                        <Route exact path='/dashboard/' component={PerformanceEvaluation}/>
                         
                    </Switch>
                </Router> */}
                    <CreateTeamForm />
                </div>


                <SideBar />
            </div>


        )
    }
}

export default AdminDashboard