import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

 const EnterPassForm = ()=>{
    return(
        <div>
            
            <h1 class="text-right">
                            شماره تماس
                        </h1>
                        <br/>
                        <div class = "d-lg-flex justify-content-end">
                            <div class="keyPad-image">

                            </div>
                            <input id="enter-phone-number-input" type="text" class="form-control text-right" placeholder="برای ورود شماره تماس خود را وارد کنید " />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        
                        <div class="submit-button-container">
                            <Link to="/EnterPassWord"><button id="submit-button" class="btn form-control">ورود</button></Link>
                        </div>
                        
                  
        </div>
    );
}


export default EnterPassForm;