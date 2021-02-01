import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

 class EnterPassForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          phoneNumber : ''
        };
    }
    
    CheckPhoneNumber = ()=>{
        this.props.checkPhone(this.state.phoneNumber)
    }

    render(){
       
        return(
            <div>
                
                <h1 class="text-right">
                                شماره تماس
                            </h1>
                            <br/>
                            <div class = "d-lg-flex justify-content-end">
                                <div class="keyPad-image">
    
                                </div>
                                <input id="enter-phone-number-input" type="text" 
                                class="form-control text-right" 
                                placeholder="برای ورود شماره تماس خود را وارد کنید " 
                                onChange={(e)=>this.setState({phoneNumber:e.target.value})}/>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            
                            
                            <div class="submit-button-container">
                                
                                <button id="submit-button" class="btn form-control"
                                 onClick = {()=>this.CheckPhoneNumber()}>
                                     ورود
                                </button>
                                
                                
                                
                            </div>
                            
                      
            </div>
        );
    }
}


export default EnterPassForm;