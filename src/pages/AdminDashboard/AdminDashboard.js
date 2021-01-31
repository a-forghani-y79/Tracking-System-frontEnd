import React, { Component } from 'react'
import SideBar from "../../components/Admin/SideBar/SideBar"
import "./adminDashboard.css";

class AdminDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className = 'main-container'>
                <div className='group-image-container'>

                </div>
                <SideBar />
            </div>

        )
    }
}

export default AdminDashboard