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
                         
                    </Switch>
                </Router> */}
                    <TeamPage />
                </div>


                <SideBar />
            </div>


        )
    }
}

export default AdminDashboard