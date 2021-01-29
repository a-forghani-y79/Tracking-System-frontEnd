import React, { useState } from 'react';
import './login.css';
import EnterPassForm from '../../components/LoginForm/EnterPassForm'
import EnterPhoneForm from '../../components/LoginForm/EnterPhoneForm'
import OneTimePassForm from '../../components/LoginForm/OneTimePassForm'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Login = (props) => {
    // const[productState,setProduct] = useState('')



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
                            {/* <OneTimePassForm/> */}
                            <Router>
                                <Switch>
                                    <Route exact path='/'>
                                        <EnterPhoneForm />
                                    </Route>
                                    <Route exact path='/EnterPassWord'>
                                        <EnterPassForm/> 
                                    </Route>
                                    <Route exact path='/OneTimePassWord'>
                                        <OneTimePassForm/> 
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
            </div>


        </div>

    )
}
export default Login;