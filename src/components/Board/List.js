import { React, useState, useEffect } from 'react'
import './list.css'
import add from "../../assets/images/plus-black.svg";
const List = (props)=> {
    return (
        <>
            <div className='list-container'>
                <div className='list-header'>
                    <span>
                        لیست
                    </span>
                </div>
                <div className='list-body'>

                </div>
                <div className='add-card-to-list'>


                    <button className='btn d-lg-flex' onClick={props.addFunction}>
                        <div className=''>
                            <span>
                                افزودن کارت جدید
                        </span>
                        </div>
                        <div className='add-card-btn'>
                            <img src={add}>
                            </img>
                        </div>
                    </button>
                </div>
            </div>


        </>
    )
}

export default List
