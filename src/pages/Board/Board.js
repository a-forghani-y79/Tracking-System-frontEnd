import { React, useState, useEffect } from 'react'
import './Board.css'
import Logo from '../../assets/images/Group1.svg'
import List from '../../components/Board/List'
function Board() {
    return (
        <>
            <div className='board-container'>
                <div className='board-header'>

                    <div className='header-Logo'>
                        <img src={Logo}>
                        </img>
                    </div>
                    <div className='header-project-infos'>
                        <input />
                        <span>
                            نام پروژه
                        </span>
                    </div>

                </div>
                <div className='board-main-container'>
                    <List />
                    <List />
                    <List />
                    <List />
                </div>

            </div>
        </>
    )
}

export default Board
