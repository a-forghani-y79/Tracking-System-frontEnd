import React, { useState } from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import SideBarData from "./SideBarData";
import SubMenu from "./SubMenu";
import "./sideBarStyle.css";



const SideBar = () => {
    return (
        <>

            <nav className='SidebarNav'>
                <div className='profile-container'>
                    <div className='user-image-container'>

                    </div>
                    <div className='info-container'>
                        <div className='roll'>
                            <span> کارمند </span>
                        </div>

                        <div className="name">
                            <span>فاطمه غفوری</span>
                        </div>
                    </div>

                </div>
                <div className='divider'></div>
                <div className='SidebarWrap'>

                    {SideBarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </div>
            </nav>
        </>
    )
}

export default SideBar
