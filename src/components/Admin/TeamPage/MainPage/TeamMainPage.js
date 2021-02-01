import { React, useState, useEffect } from 'react'
import MembersSlider from "./Sliders/MembersSlider";
import ProjectsSlider from "./Sliders/ProjectsSlider";
import './TeamMainPage.css'
import plusBtn from '../../../../assets/images/plus.svg'
import AddMember from "../Modals/AddMember";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import closeIcone from '../../../../assets/images/layer1.svg'

function TeamMainPage() {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
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

                        <div className='add-project-btn'>
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

                        <div className='add-member-btn' onClick={showModal}>
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
                <Modal show={isOpen} onHide={hideModal} size="lg">
                    {/* <Modal.Header>
                        <Modal.Title>Hi</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        
                            <div className='addMember-Modal-title'>
                               
                                    
                                <img className='modal-close-btn' src={closeIcone}></img>
                                    
                                
                                <div className ='modal-title'>
                                    <span> افزودن عضو جدید</span>
                                </div>
                                
                            </div>
                            <div className='addMember-Modal-body'>
                                <div className = 'search-icone'></div>
                                <input className='form-control'/>
                            </div>
                        
                        
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <button onClick={hideModal}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer> */}
                </Modal>

            </div>
            {/* <div className='addProjectModal'>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title>Hi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>The body</Modal.Body>
                    <Modal.Footer>
                        <button onClick={hideModal}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer>
                </Modal>

            </div> */}

        </div>
    )
}

export default TeamMainPage
