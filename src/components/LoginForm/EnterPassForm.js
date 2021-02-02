import React, {Component} from 'react';
import {otp} from "../../services/LoginAuth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class EnterPassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
    }

    checkPass = () => {
        this.props.checkPass(sessionStorage.getItem("number"), this.state.password)
    }
    sendRequrst = () => {
        otp(sessionStorage.getItem("number")).then(response => {
            sessionStorage.setItem("otp",response.data.tempPassword.code)
            console.log(sessionStorage.getItem("otp"))
        }).catch(e => {
            console.log("error")
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <h1 class="text-right">
                    رمز عبور
                </h1>
                <br/>
                <div class="hint d-lg-flex justify-content-end align-items-end">
                                <span class="mr-3">
                                    <a class="text-decoration-none"
                                       href="http://localhost:3000/Login">ویرایش شماره تماس</a>
                                </span>
                    <span class="text-right">
                                     کاربر به شماره تماس {sessionStorage.getItem("number")}
                        <br/>برای ورود به حساب کاربری خود رمز عبور را وارد کنید
                                </span>


                </div>
                <br/>
                <div class="d-lg-flex justify-content-end">
                    <div class="keyPad-image">

                    </div>
                    <input onChange={(e) => this.setState({password: e.target.value})}
                           id="enter-phone-number-input" type="text" class="form-control text-right"
                           placeholder="رمز عبور خود را وارد کنید"/>
                </div>
                <br/>
                <div class="forget-pass d-lg-flex justify-content-end align-items-end">
                                <span>
                                   آیا رمز عبور خود را فراموش کرده اید ؟ <Link to="OneTimePassWord"><a
                                    onClick={this.sendRequrst} href=""> ورود با رمز یکبار مصرف </a>  </Link>
                                </span>
                </div>
                <div class="submit-button-container">
                    <button id="submit-button" class="btn form-control" onClick={this.checkPass}>ورود</button>
                </div>


            </div>
        );
    }

}

export default EnterPassForm;