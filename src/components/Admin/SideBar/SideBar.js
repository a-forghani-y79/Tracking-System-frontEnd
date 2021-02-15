import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// import SideBarData from "./SideBarData";
import SubMenu from "./SubMenu";
// import "./sideBarStyle.css";\
import { getTeams } from '../../../services/Admin/Team'
import cricle from "../../../assets/images/CIRCLE.svg";
import { Wrapper } from "../../../contexts/AdminPanelContext"
import { sideBarWrapper } from "../../../contexts/AdminSideBarContext";


const SideBar = () => {
    const [flag, setFleg] = useState('');
    // const [isHome,setIsHome] = useContext(Wrapper)
    const [sideBarData, setSideBarData] = useContext(sideBarWrapper);

    const prepareTeamsArray = (array) => {
        let resultArray = []
        array.forEach(element => {
            resultArray.push({
                title: element.name,
                path: '',
                icon: <img className='fix-style' src={cricle}></img>
            })
        });
        return resultArray;
    }
    function arrayRemove(arr, value) { 
    
        arr =  arr.filter((elem)=>{ 
            return elem.title !== value; 
        });
    }
    // const isHomeRendered = () => {
    //     // let url = window.location.href
    //     // console.log(url);
    //     SideBarData.splice(3,1)
    // //    arrayRemove(SideBarData,'ایجاد تیم جدید')
    //     setIsHome(false)
    // }
    

    useEffect(() => {
        // isHomeRendered()
        // console.log(isHome);
        // console.log('sideBar')
        console.log(sideBarData.length);
        getTeams().then(res => {
            let temp = []
            temp = prepareTeamsArray(res.data)
            sideBarData[0].subNav = [...temp]
            console.log('sucsses')
        }).catch(err=>{
            console.log("err");
        })
        

        
       

        setFleg("123")
    })
    
    return (

        <>

            <nav className='SidebarNav'>
                <div className='profile-container'>
                    <div className='user-image-container'>

                    </div>
                    <div className='info-container'>
                        <div className='roll'>
                            <span> مدیر شرکت </span>
                        </div>

                        <div className="name">
                            <span>فاطمه غفوری</span>
                        </div>
                    </div>

                </div>
                {/* <div className='divider'></div> */}

                <hr class="divider" />
                <div className='SidebarWrap'>

                    {sideBarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </div>
            </nav>
        </>
    )
}

export default SideBar
