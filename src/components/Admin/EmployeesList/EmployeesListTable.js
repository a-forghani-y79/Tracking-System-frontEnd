import { React, useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
// import './EmployeesTable.css'
import Modal from "react-bootstrap/Modal";
import plusBtn from '../../../assets/images/plus.svg'
import closeIcone from '../../../assets/images/layer1.svg'
import inviteIcone from '../../../assets/images/Wavy_Bus.svg'
import removeIcone from '../../../assets/images/g88.svg'

function EmployeesListTable() {
    const [employees, setEmployees] = useState([
        { name: "test", email: '123@456', phone: '09149783368' },
        { name: "test", email: '123@456', phone: '09149783368' },
        { name: "test", email: '123@456', phone: '09149783368' },
        { name: "test", email: '123@456', phone: '09149783368' },
        { name: "test", email: '123@456', phone: '09149783368' }

    ])
    const [inviteEmployeeIsOpen, setInviteEmployeeIsOpen] = useState(false);
    const [removeEmployeeIsOpen, setRemoveEmployeeIsOpen] = useState(false);

    const showInviteEmployeeModal = () => {
        setInviteEmployeeIsOpen(true);
    };

    const hideInviteEmployeeModal = () => {
        setInviteEmployeeIsOpen(false);
    };



    const showRemoveEmployeeModal = () => {
        setRemoveEmployeeIsOpen(true);
    };

    const hideRemoveEmployeeModal = () => {
        setRemoveEmployeeIsOpen(false);
    };

    const renderTableRows = (employees, index) => {
        return (
            <tr key={index}>
                <td>{employees.name}</td>
                <td>{employees.email}</td>
                <td>{employees.phone}</td>
                <td>
                    <button className='kick-btn' onClick={showRemoveEmployeeModal}>
                        اخراج
                    </button>

                </td>
            </tr>
        )
    }
    return (
        <>
            <div className='employee-table'>
                <div className='employee-list-title'>
                    <div className='add-member-btn' onClick={showInviteEmployeeModal}>
                        <div>
                            <span>
                                دعوت به همکاری
                            </span>
                        </div>
                        <img src={plusBtn}></img>
                    </div>
                    <span>
                        لیست کارمندان
                    </span>
                </div>
                <ReactBootstrap.Table borderless hover rounded-top>
                    <thead className='table-header'>
                        <tr>
                            <th>نام و نام خانوادگی</th>
                            <th>پست الکترونیکی</th>
                            <th>شماره تماس</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(renderTableRows)}
                    </tbody>
                </ReactBootstrap.Table>
            </div>

            <Modal show={inviteEmployeeIsOpen} onHide={hideInviteEmployeeModal} size="lg">

                <Modal.Body>

                    <div className='addMember-Modal-title'>


                        <img className='modal-close-btn' src={closeIcone} onClick={hideInviteEmployeeModal}></img>




                    </div>
                    <div className='invite-Modal-body'>
                        <div className='invite-image-container'>
                            <img src={inviteIcone} ></img>
                        </div>
                        <div className='invite-input-container'>
                            <div className='modal-title'>
                                <span> دعوت به همکاری</span>
                            </div>
                            <br />
                            <span>
                                پست الکترونیکی شخص مورد نظر خود را وارد کنید
                            </span>
                            <br />
                            <input id='invite-input-email' className='form-control' placeholder='email@email.com' />
                            <br />
                            <br />
                            <br />
                            <button className='invite-btn'>
                                ارسال دعوت نامه
                            </button>
                        </div>


                    </div>


                </Modal.Body>

            </Modal>
            {/* remove modal */}
            <Modal show={removeEmployeeIsOpen} onHide={hideRemoveEmployeeModal} size="lg">

                <Modal.Body>

                    <div className='addMember-Modal-title'>


                        <img className='modal-close-btn' src={closeIcone} onClick={hideRemoveEmployeeModal}></img>




                    </div>
                    <div className='invite-Modal-body'>
                        <div className='invite-image-container'>
                            <img src={removeIcone} ></img>
                        </div>
                        <div className='remove-input-container'>
                            <div className='modal-title'>
                                <span> اخراج</span>
                            </div>
                            <br />
                            <span>
                                با اخراج این کارمند تمام دسترسی های وی از تیم ها و پروژه ها قطع خواهد شد
                            </span>
                            <br />
                            <span>
                                آیا مطمین هستید؟
                            </span>
                            <br />
                            <br />
                            <br />
                            <div className='option-btns-container d-lg-flex justify-content-around' >
                                <button className='back-btn'>
                                    بازگشت
                                </button>
                                <button className='remove-btn'>
                                    اخراج
                                </button>
                            </div>


                        </div>


                    </div>


                </Modal.Body>

            </Modal>
        </>
    )
}

export default EmployeesListTable
