import React,{useState} from 'react';

 const LoginForm = ()=>{
    return(
        <div>
            
                        <h1 class="text-right">
                            شماره تماس
                        </h1>
                        <br/>
                        <div class="hint d-lg-flex justify-content-end align-items-end">
                            <span class="mr-3">
                                <a class="text-decoration-none" href="#">ویرایش شماره تماس</a>
                            </span>
                            <span class="text-right">
                                 کاربر به شماره تماس 09142673982
                                <br/>برای ورود به حساب کاربری خود رمز عبور را وارد کنید
                            </span>
                            
                        </div>
                        <br/>
                        <div class = "d-lg-flex justify-content-end">
                            <div class="keyPad-image">

                            </div>
                            <input id="enter-phone-number-input" type="text" class="form-control text-right" placeholder="رمز عبور خود را وارد کنید" />
                        </div>
                        <br/>
                        <div class="forget-pass d-lg-flex justify-content-end align-items-end">
                            <span>
                               آیا رمز عبور خود را فراموش کرده اید ؟ <a href=""> ورود با رمز یکبار مصرف </a> 
                            </span>
                        </div>
                        <div class="submit-button-container">
                            <button id="submit-button" class="btn form-control">ورود</button>
                        </div>
                        
                  
        </div>
    );
}


export default LoginForm;