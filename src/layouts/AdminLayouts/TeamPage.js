//  a router between main page or Tables
import React from 'react'
import { Router, Switch ,Route} from 'react-router-dom';
import TeamMainPage from "../../components/Admin/TeamPage/MainPage/TeamMainPage";
import TablesContainer from "../../components/Admin/TeamPage/Tables/TablesContainer";

function TeamPage() {
    return (
        <>

        {/* <Router>
            <Switch>
                <Route >

                </Route>
                <Route>
                
                </Route>
            </Switch>
        </Router> */}
        <TeamMainPage/>
        </>
    )
}

export default TeamPage
