import { React, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = ({match}) => {
    const [name,setName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [email,setEmail] = useState('')
    const [alert,setAlert] = useState({
            showAlert: false,
            alertText: '' 
    })

    
    let { id } = useParams();



    const validation = ()=>{
        if(name ==='ghader'){

        }
        else{
            setAlert({
                showAlert: true,
                alertText: 'اطلاعات وارد شده معتبر نمی باشد.' 
            })
        }
        
    }


   const  notify = (text) => toast.error(text);



    let showAlertBox = null
    if (alert.showAlert) {
        notify(alert.alertText)
        showAlertBox = (
            <ToastContainer
                rtl
                position="bottom-right"
                style={{width: "400px"}}
            />
        )
    }
    return (
        
        
        
        <>
            <div>


                
                <div class="d-lg-flex flex-column align-items-end">
                    <label>
                        نام و نام خانوادگی
                    </label>
                    
                    <input id="enter-name-lastName-input" type="text"
                        class="form-control text-right"
                        placeholder="نام و نام خانوادگی خود را وارد کنید "
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div class="d-lg-flex flex-column align-items-end">
                    
                    <div class="keyPad-image">

                    </div>
                    <label>
                        شماره تماس
                    </label>
                    
                    <input id="register-enter-phone-number-input" type="text"
                        class="form-control text-right"
                        placeholder="برای ورود شماره تماس خود را وارد کنید "
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        
                    />
                    {/* onChange={(e) => this.setState({ phoneNumber: e.target.value })}  */}
                </div>
                <div class="d-lg-flex flex-column align-items-end">
                    <label>
                         پست الکترونیکی
                    </label>
                    
                    <input id="enter-email-addres-input" type="text"
                        class="form-control text-right"
                        placeholder="پست الکترونیکی خود را وارد کنید "
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* onChange={(e) => this.setState({ phoneNumber: e.target.value })}  */}
                </div>
                
                
                <div class="register-button-container">

                    <button id="submit-button" class="btn form-control"
                        onClick={() => validation() }>
                        ثبت نام
                    </button>


                </div>
                <div className='rtl-text'>
                        {showAlertBox}
                </div>

            </div>
        </>
    )
}

export default Register
//TODO get Token
