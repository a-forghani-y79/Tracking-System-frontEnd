import React, { Component } from 'react';
import './login.css';
import EnterPassForm from '../../components/LoginForm/EnterPassForm'
import EnterPhoneForm from '../../components/LoginForm/EnterPhoneForm'
import OneTimePassForm from '../../components/LoginForm/OneTimePassForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    match,
    withRouter
} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: {
                showAlert: false,
                alertText: ''
            }
        };
    }
     notify = (text) => toast.error(text);
    checkPhone = (number,path) => {
        if (number === '09142673982') {
            // document.location.href = 'http://localhost:3000/Login/EnterPassWord'
            this.props.history.push(path);
            
            // alert('hello');
        }

        else if(number !== ''){
            this.setState({
                alert: {
                    showAlert: true,
                    alertText: `کاربر با شماره تماس ${number} در سامانه ثبت نشده است`
                }
            })

        }

    }
    checkPass = () => {

    }
    checkOneTimePass = () => {

    }
   



    render() {

        let showAlertBox = null
        if (this.state.alert.showAlert) {
            this.notify(this.state.alert.alertText)
            showAlertBox = (
                <ToastContainer
                rtl 
                position="bottom-right"
                style={{ width: "400px" }}
                 />
            )
            
            
        }
        const  {path}  = this.props.match;
        
        return (
            <div>
                <div class="d-lg-flex justify-content-center align-items-center main-container">
                    <main class="d-lg-flex justify-content-around align-items-center">
                        <div class="image-container d-lg-flex flex-column align-items-center justify-content-end">
                            <div class="main-image-container">

                            </div>
                            <div class="text">

                                <span>
                                    (Tracking System) تیم موون کنار هم جمع شدن تا سامانه ردیابی
                                </span>
                                <br />
                                <span>
                                    .رو ساده و زیبا پیاده سازی کنند
                                </span>
                                <br />
                                <span>
                                    :) مثلِ ماه
                                </span>
                                <br />
                                <span>
                                    ترم 1-99
                                </span>


                            </div>
                        </div>
                        <div class="divider">

                        </div>
                        <div class="form-container d-lg-flex align-items-end flex-column">
                            <div class="title d-lg-flex justify-content-end">
                                <h1>
                                    ورود
                            </h1>
                            </div>
                            <br />
                            <div class="form">

                                <Router>
                                    <Switch>
                                        <Route exact path={`${path}/`} >
                                            <EnterPhoneForm checkPhone={this.checkPhone} />
                                        </Route>
                                        <Route exact path={`${path}/EnterPassWord`}>
                                            <EnterPassForm checkPass={this.checkPass} />
                                        </Route>
                                        <Route exact path={`${path}/OneTimePassWord`}>
                                            <OneTimePassForm checkOneTimePass={this.checkOneTimePass} />
                                        </Route>

                                    </Switch>
                                </Router>

                            </div>
                            <div class="logos d-lg-flex justify-content-center align-items-center">
                                <a href="">
                                    <div class="facebook-logo">

                                    </div>
                                </a>
                                <a href="">
                                    <div class="instagram-logo">

                                    </div>
                                </a>
                                <a href="">
                                    <div class="twitter-logo">

                                    </div>
                                </a>
                            </div>
                        </div>
                    </main>

                    <div className='rtl-text'>
                    {showAlertBox}
                    </div>
                    


                </div>


            </div>

        )
        
    }



}
export default Login;
