import { React, useState, useEffect } from 'react'
import './createTeamForm.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTeamForm() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className='CreateTeamForm-title'>
                <span>
                    ایجاد تیم جدید
                </span>
            </div>
            <div className='CreateTeamForm-form'>
                <form>
                    <div className='CreateTeamForm-input-groupp'>
                        <label class="control-label">نام تیم</label>
                        <input id='team-name' className='form-control' placeholder='نام تیم را وارد کنید '></input>
                    </div>
                    <br />
                    <div className='CreateTeamForm-input-groupp'>
                        <label class="control-label"> افزودن عضو جدید</label>
                        <input id='name-of-new-member' className='form-control' placeholder='نام عضو جدید را جست و جو کنید '></input>
                    </div>
                    <br />
                    <div className='CreateTeamForm-input-groupp'>
                        <label class="control-label">نام پروژه</label>
                        <input id='name-of-project' className='form-control' placeholder='نام پروژه را وارد کنید '></input>
                    </div>
                    <br />
                    <div className='CreateTeamForm-input-groupp'>
                        <label class="control-label"> مدیر پروژه</label>
                        <input id='select-manager' className='form-control' placeholder='مدیر پروژه را انتخاب کنید'></input>
                    </div>
                    <br />
                    <div className='CreateTeamForm-input-groupp'>
                        <label class="control-label">تاریخ تحویل پروژه</label>
                        <DatePicker id='project-data-picker' selected={startDate} onChange={date => setStartDate(date)} />

                    </div>
                    <br />
                    <div className='upload-box'>
                        <button className='submit-btn'>
                            ثبت
                            </button>
                        <div className='d-lg-flex flex-column align-items-end'>

                            <label class="control-label">مستندات پروژه</label>

                            <input id='upload-file-btn' type='file' className='upload-file-btn-Team' placeholder=''></input>
                        </div>


                    </div>

                </form>
            </div>


        </>
    )
}

export default CreateTeamForm
