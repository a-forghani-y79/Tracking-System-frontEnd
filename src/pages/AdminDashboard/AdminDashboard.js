import React, { Component } from 'react'
import SideBar from "../../components/Admin/SideBar/SideBar"

import Home from "../../layouts/AdminLayouts/home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import TeamPage from "../../layouts/AdminLayouts/TeamPage";
import './Admin.css'
import CreateTeamForm from "../../components/Admin/CreateTeam/CreateTeamForm";
import PerformanceEvaluation from "../../layouts/AdminLayouts/PerformanceEvaluation";
import EmployeesList from "../../layouts/AdminLayouts/EmployeesList";
import { AdminPanelContext } from "../../contexts/AdminPanelContext";
import {AdminSideBarContext} from "../../contexts/AdminSideBarContext";

const AdminDashboard = (props) => {


    const match = useRouteMatch();


    return (
        <div>
            <AdminSideBarContext >


                <div className='main-container'>
                    <Switch>
                        <Route exact path={`${match.url}/`} component={Home} />
                        <Route exact path={`${match.url}/TeamPage`} component={TeamPage} />
                        <Route exact path={`${match.url}/CreateTeam`} component={CreateTeamForm} />
                        <Route exact path={`${match.url}/PerformanceEvaluation`} component={PerformanceEvaluation} />
                    </Switch>
                </div>
                <SideBar />

            </AdminSideBarContext>
        </div>


    )

}

export default AdminDashboard