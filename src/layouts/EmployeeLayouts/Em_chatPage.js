import { React, useState, useEffect } from 'react'
import './Em_chatPage.css'
import BackBtn from '../../assets/images/Path33.svg'
import Document from '../../assets/images/Group162.svg'
const Em_chatPage = ()=> {
    return (
        <div className='chat-container'>
            <div className = 'chat-title'>
                <div>
                    <img src={BackBtn}></img>
                </div>
                <div className='chat-title-container'>
                    <span id='project-name'>
                        نام پروژه
                    </span>
                    <span id='manager-name'>
                        فاطمه غفوری
                    </span>
                </div>
            </div>
            <div className = 'chat-body'>

            </div>
            <div className = 'chat-text-box'>
                <div className = 'document-logo'>
                    <img id='document-logo' src={Document}></img>

                </div>

                <input className='form-control' placeholder='پیام خود را بنویسید'>
                </input>
            </div>

        </div>
    )
}

export default Em_chatPage
