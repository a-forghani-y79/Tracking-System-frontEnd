import React, {useState, useEffect} from 'react';
import Countdown from 'react-countdown';

const OneTimePassForm = () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("");
    const [val5, setVal5] = useState("");
    const [val6, setVal6] = useState("");
    const [sendMessageText, setSendMessageText] = useState('ارسال مجدد در')


    function autoTab(current, to) {
        if (current.value.length == current.getAttribute("maxlength")) {
            to.focus();
        }
    }

    function resendMessage(e) {
        e.preventDefault();
        if (sendMessageText === 'ارسال مجدد') {
            setSendMessageText('ارسال مجدد در')
        }
    }

    const renderer = ({minutes, seconds, completed}) => {

        if (completed) {
            // Render a completed state
            // after ending the time
            completed = !completed

            setSendMessageText('ارسال مجدد')
            return " "
        } else if (sendMessageText === 'ارسال مجدد در') {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        } else
            return ""
    };

    const onClickLogin=()=>{

    }


    return (
        <div>

            <h1 class="text-right">
                رمز عبور یکبار مصرف
            </h1>
            <br/>
            <div class="hint d-lg-flex justify-content-end align-items-end">
                        <span class="mr-3">
                            <a class="text-decoration-none" href="http://localhost:3000/Login">ویرایش شماره تماس</a>
                        </span>
                <span class="text-right">
                            کاربر به شماره تماس {sessionStorage.getItem("number")}
                    <br/>برای ورود کد پیامک شده را وارد کنید
                        </span>

            </div>
            <br/>
            <div className="d-lg-flex justify-content-around">

                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input1'
                       value={val1}
                       onChange={e => setVal1(e.target.value.replace(/[^0-9]/g, ""))}
                       onInput={(e) => autoTab(e.target, document.querySelector('input[name=input2]'))}
                />

                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input2'
                       value={val2}
                       onChange={e => setVal2(e.target.value.replace(/[^0-9]/g, ""))}
                       onInput={(e) => autoTab(e.target, document.querySelector('input[name=input3]'))}
                />
                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input3'
                       value={val3}
                       onChange={e => setVal3(e.target.value.replace(/[^0-9]/g, ""))}
                       onKeyUp={(e) => autoTab(e.target, document.querySelector('input[name=input4]'))}/>
                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input4'
                       value={val4}
                       onChange={e => setVal4(e.target.value.replace(/[^0-9]/g, ""))}
                       onKeyUp={(e) => autoTab(e.target, document.querySelector('input[name=input5]'))}
                />
                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input5'
                       value={val5}
                       onChange={e => setVal5(e.target.value.replace(/[^0-9]/g, ""))}
                       onKeyUp={(e) => autoTab(e.target, document.querySelector('input[name=input6]'))}
                />
                <input className="code-input" type="text" placeholder="0" maxLength={1}
                       name='input6'
                       value={val6}
                       onChange={e => setVal6(e.target.value.replace(/[^0-9]/g, ""))}/>

            </div>
            <br/>
            <div className="forget-pass d-lg-flex justify-content-end align-items-end">
                        <span>
                            <a href="#" onClick={resendMessage}>
                            {sendMessageText}{
                                <Countdown

                                    date={Date.now() + 75000}
                                    renderer={renderer}/>
                            } 
                            </a>
                        </span>
            </div>
            <div className="submit-button-container">
                <button id="submit-button" class="btn form-control">ورود</button>
            </div>


        </div>
    );
}

export default OneTimePassForm; 