import { React, useState, useEffect } from 'react'
import SideBar from "../../components/Employee/Em-SideBar/SideBar"
import Em_Home from '../../layouts/EmployeeLayouts/Em_Home'
import Em_chatPage from "../../layouts/EmployeeLayouts/Em_chatPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";



function EmployeeDashboard() {
    return (
        <>
            <div>

                <div className='main-container'>
                    {/* <Router>
                        <Switch>
                            <Route exact path='/dashboard/' component={Home} />
                            <Route exact path='/dashboard/' component={TeamPage} />


                        </Switch>
                    </Router> */}
                    <Em_chatPage/>
                </div>


                <SideBar />
            </div>
        </>
    )
}

export default EmployeeDashboard
