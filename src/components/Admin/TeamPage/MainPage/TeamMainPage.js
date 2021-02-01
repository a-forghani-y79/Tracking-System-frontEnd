import { React, useState, useEffect } from 'react'
import MembersSlider from "./Sliders/MembersSlider";
import ProjectsSlider from "./Sliders/ProjectsSlider";
import './TeamMainPage.css'
import plusBtn from '../../../../assets/images/plus.svg'
import AddMember from "../Modals/AddMember";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import closeIcone from '../../../../assets/images/layer1.svg'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TeamMainPage() {
    const [addMemberisOpen, setaddMemberisOpen] = useState(false);
    const [addProjectisOpen, setaddProjectisOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleDayClick = (day) => {
        console.log(day);
    }

    const showaddMemberModal = () => {
        setaddMemberisOpen(true);
    };

    const hideaddMemberModal = () => {
        setaddMemberisOpen(false);
    };



    const showAddProjectModal = () => {
        setaddProjectisOpen(true);
    };

    const hideAddProjectModal = () => {
        setaddProjectisOpen(false);
    };



    return (

        <div>
            <div className='main-page-container'>
                <div className='team-name-container'>
                    <div className='team-name'>
                        <span >
                            نام تیم
                        </span>
                    </div>

                </div>
                <div className='projects-slider-container'>
                    <div className='slider-title-container'>

                        <div className='add-project-btn' onClick={showAddProjectModal}>
                            <div>
                                <span>
                                    افزودن پروژه های جدید
                                </span>
                            </div>
                            <img src={plusBtn}></img>
                        </div>
                        <div className='slider-name'>
                            <span>
                                پروژه های تیم
                            </span>
                        </div>
                    </div>
                    <ProjectsSlider />
                </div>
                <div className='members-slider-container'>
                    <div className='slider-title-container'>

                        <div className='add-member-btn' onClick={showaddMemberModal}>
                            <div>
                                <span>
                                    افزودن عضو جدید
                                </span>
                            </div>
                            <img src={plusBtn}></img>
                        </div>
                        <div className='slider-name'>
                            <span>
                                اعضای تیم
                            </span>
                        </div>
                    </div>
                    <MembersSlider />
                </div>
            </div>
            <div className='addMemberModal'>
                <Modal show={addMemberisOpen} onHide={hideaddMemberModal} size="lg">
                    {/* <Modal.Header>
                        <Modal.Title>Hi</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>

                        <div className='addMember-Modal-title'>


                            <img className='modal-close-btn' src={closeIcone}></img>


                            <div className='modal-title'>
                                <span> افزودن عضو جدید</span>
                            </div>

                        </div>
                        <div className='addMember-Modal-body'>
                            <div className='search-icone'></div>
                            <input className='form-control' />
                        </div>


                    </Modal.Body>
                    {/* <Modal.Footer>
                        <button onClick={hideModal}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer> */}
                </Modal>

            </div>
            <div className='addProjectModal'>
                <Modal show={addProjectisOpen} onHide={hideAddProjectModal} size="lg">

                    <Modal.Body>
                        <div className='addMember-Modal-title'>


                            <img className='modal-close-btn' src={closeIcone}></img>


                            <div className='modal-title'>
                                <span> افزودن پروژه جدید</span>
                            </div>

                        </div>
                        <br />
                        <div className='addProject-Modal-body'>
                            <form>
                                <div className='input-groupp'>
                                    <label class="control-label">نام پروژه</label>
                                    <input id='project-name' className='form-control' placeholder='نام پروژه را وارد کنید '></input>
                                </div>
                                <br />
                                <div className='input-groupp'>
                                    <label class="control-label">مدیر پروژه</label>
                                    <input id='choose-manager' className='form-control' placeholder='مدیر پروژه را انتخاب کنید '></input>
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

        </div>
    )
}

export default TeamMainPage
