import React, {Component} from 'react';
import './login.css';
import EnterPassForm from '../../components/LoginForm/EnterPassForm'
import EnterPhoneForm from '../../components/LoginForm/EnterPhoneForm'
import OneTimePassForm from '../../components/LoginForm/OneTimePassForm'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import {phoneValidation} from "../../services/LoginAuth"
import {checkPass} from "../../services/LoginAuth"
import {otp} from "../../services/LoginAuth"
import Register from "../../components/LoginForm/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    match,
    withRouter,
    useRouteMatch
} from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            alert: {
                showAlert: false,
                alertText: ''
            }
        };
    }

    notify = (text) => toast.error(text);
    checkPhone = (number) => {
        phoneValidation(number).then(data => {
            console.log(data)
            if (data.data) {
                sessionStorage.setItem("number", number)
                document.location.href = 'http://localhost:3000/Login/EnterPassWord'
            } else {
                this.setState({
                    alert: {
                        showAlert: true,
                        alertText: `کاربر با شماره تماس ${number} در سامانه ثبت نشده است`
                    }
                })
            }
        }).catch(e => {
            this.setState({
                    alert: {
                        showAlert: true,
                        alertText: `SERVER ERROR`
                    }
                })
        })


    }

    checkPass = (number, password) => {
        checkPass(number, password).then(data => {
            if (data.data.role === "ADMIN") {
                sessionStorage.setItem("person", data.data)
                document.location.href = 'http://localhost:3000/AdminDashboard'
            } else {
                sessionStorage.setItem("person", data.data)
                document.location.href = 'http://localhost:3000/EmployeeDashboard'
            }
        }).catch(e => {
            if (e.status === 404) {
                
                this.setState({
                    alert: {
                        showAlert: true,
                        alertText: `رمز وارد شده معتبر نمی باشد`
                    }
                })
            }
        })
    }
    checkOneTimePass = () => {
        otp(this.state.number).then(data => {

        })
    }


    render() {

        let showAlertBox = null
        if (this.state.alert.showAlert) {
            this.notify(this.state.alert.alertText)
            showAlertBox = (
                <ToastContainer
                    rtl
                    position="bottom-right"
                    style={{width: "400px"}}
                />
            )


        }
        const {path} = this.props.match;


        return (
            <div>
                <div class="d-lg-flex justify-content-center align-items-center login-main-container">
                    <main class="d-lg-flex justify-content-around align-items-center">
                        <div class="image-container d-lg-flex flex-column align-items-center justify-content-end">
                            <div class="main-image-container">

                            </div>
                            <div class="text">

                                <span>
                                    (Tracking System) تیم موون کنار هم جمع شدن تا سامانه ردیابی
                                </span>
                                <br/>
                                <span>
                                    .رو ساده و زیبا پیاده سازی کنند
                                </span>
                                <br/>
                                <span>
                                    :) مثلِ ماه
                                </span>
                                <br/>
                                <span>
                                    ترم 1-99
                                </span>


                            </div>
                        </div>
                        <div class="divider-vr">

                        </div>
                        <div class="form-container d-lg-flex align-items-end flex-column">

                            <div class="title d-lg-flex justify-content-end">

                                <h1>
                                    ورود
                                </h1>


                            </div>


                            <br/>
                            <div class="form">

                                {/* <Router>
                                    <Switch>
                                        <Route  path={`${path}/`} >
                                            <EnterPhoneForm checkPhone={this.checkPhone} />
                                            {
                                                console.log(path)
                                            }
                                        </Route>
                                        <Route  path={`${path}/EnterPassWord`}>
                                            <EnterPassForm checkPass={this.checkPass} />
                                        </Route>
                                        <Route  path={`${path}/OneTimePassWord`}>
                                            <OneTimePassForm checkOneTimePass={this.checkOneTimePass} />
                                        </Route>

                                    </Switch>
                                </Router> */}
                                <Router>
                                    <Switch>
                                        <Route path={`${path}/EnterPassWord`}>
                                            <EnterPassForm checkPass={this.checkPass}/>
                                        </Route>
                                        <Route exact path={`${path}`}>
                                            <EnterPhoneForm checkPhone={this.checkPhone}/>
                                        </Route>
                                        <Route exact path={`${path}/OneTimePassWord`}>
                                            {/*<Route exact path={`http:///OneTimePassWord`}>*/}
                                            <OneTimePassForm checkOneTimePass={this.checkOneTimePass}/>
                                        </Route>
                                        <Route exact path={`${path}/Register/:id`}>
                                            {/*<Route exact path={`http:///OneTimePassWord`}>*/}
                                            <Register />
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
