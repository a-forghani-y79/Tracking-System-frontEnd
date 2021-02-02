import { React, useState, useEffect } from 'react'
import './Board.css'
import Logo from '../../assets/images/Group1.svg'
import List from '../../components/Board/List'
import Modal from "react-bootstrap/Modal";
import closeIcone from '../../assets/images/layer1.svg'
import card from '../../assets/images/credit-card2.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Board = ()=> {
    const [addCardModalIsopen,setAddCardModalIsOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const showAddCardModal = ()=>{
        setAddCardModalIsOpen(true)
    }
    const hideAddCardModal = ()=>{
        setAddCardModalIsOpen(false)
    }

    return (
        <>
            <div className='board-container'>
                <div className='board-header'>

                    <div className='header-Logo'>
                        <img src={Logo}>
                        </img>
                    </div>
                    <div className='header-project-infos'>
                        {/* <input /> */}
                        <span>
                            نام پروژه
                        </span>
                    </div>

                </div>
                <div className='board-main-container'>
                    <List addFunction={showAddCardModal} />
                    <List addFunction={showAddCardModal} />
                    <List addFunction={showAddCardModal} />
                    <List addFunction={showAddCardModal} />
                </div>
                <Modal show={addCardModalIsopen} onHide={hideAddCardModal} size="lg">

                    <Modal.Body>
                        <div className='addMember-Modal-title'>


                            <img className='modal-close-btn' src={closeIcone} onClick={hideAddCardModal}></img>


                            <div className='modal-title'>
                                <span> </span>
                            </div>

                        </div>
                        <br />
                        <div className='addProject-Modal-body'>
                            <form>
                                <div className='input-groupp'>
                                    <div>
                                         <label class="control-label">نام کارت</label>
                                         <img src={card}></img>
                                    </div>
                                   
                                    <input id='project-name' className='form-control' placeholder='نام کارت را وارد کنید'></input>
                                </div>
                                <br />
                                <div className='input-groupp'>
                                    <label class="control-label">توضیحات</label>
                                    <textarea id='choose-manager' className='form-control' placeholder='توضیحات کارت را وارد کنید'></textarea>
                                </div>
                                <br />
                                <div className='input-groupp'>
                                    <label class="control-label">تاریخ تحویل پروژه</label>
                                    <DatePicker id='project-data-picker' selected={startDate} onChange={date => setStartDate(date)} />
                                    {/* <input id='project-data-picker' className='form-control' placeholder='99/05/08'>
                
                </input> */}
                                </div>
                                <br />
                                <div className='project-upload-container'>

                                    <button className='submit-btn'>
                                        ثبت
                    </button>

                                    <div className='d-lg-flex flex-column align-items-end'>
                                        <label class="control-label">مستندات پروژه</label>
                                        <br />
                                        <input id='upload-file-btn' type='file' className='upload-file-btn' placeholder=''></input>
                                    </div>


                                </div>
                                <br />


                            </form>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <button onClick={hideAddProjectModal}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </>
    )
}

export default Board
