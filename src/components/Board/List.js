import { React, useState, useEffect } from 'react'
import './list.css'
import add from "../../assets/images/plus-black.svg";
function List() {
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
                    <div className=''>
                        <span>
                            افزودن کارت جدید
                        </span>
                    </div>
                    <div className='add-card-btn'>
                        <img src={add}>
                        </img>
                    </div>
                </div>
            </div>


        </>
    )
}

export default List
