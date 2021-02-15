import { React, useState, useEffect ,useRef,useContext} from 'react'
import './createTeamForm.css'
import { DatePicker } from "jalali-react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { getEmployees, getManagers } from '../../../services/Admin/users'
import {useForm} from 'react-hook-form'
import moment from 'moment-jalaali'
import Swal from 'sweetalert2'

import { sideBarWrapper} from "../../../contexts/AdminSideBarContext";

import open from "../../../assets/images/right-arrow.svg";
import close from "../../../assets/images/down-arrow.svg";
import Users from "../../../assets/images/users_logo.svg";
import chart from "../../../assets/images/pie-chart.svg";
import CreateGroup from "../../../assets/images/CreateGroup.svg";
import Manage from "../../../assets/images/manage.svg";
import Exit from "../../../assets/images/exit-svgrepo-com.svg";
import cricle from "../../../assets/images/CIRCLE.svg";

function CreateTeamForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [options, setOptions] = useState([])
    const [isFileSelected, setIsFileSelected] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState("")
    const [sideBarData, setSideBarData] = useContext(sideBarWrapper);
    // const options = [
    //     { value: '1', label: 'قادر صالحی' },
    //     { value: '2', label: 'علی علیزاده' },
    //     { value: '4 ', label: 'جواد یساری' },
    //     { value: '5 ', label: 'شهرام شب پره' },
    //     { value: '6 ', label: 'گوگوش' },
    //     { value: '7 ', label: 'شماعی زاده' }
    // ]
    const [teamName,setTeamName] = useState('')
    const [selectedEmployees,setSelectedEmployees] = useState([])
    const [projectName,setProjectName] = useState('')
    const [managerName,setManagerName] = useState('')
    // const [uploadedFile,setUploadedFile] = useState("")
    const {register, handleSubmit} = useForm()
    const [isSubmitSuccssesful,setIsSubmitSuccssesful] = useState(false)

    
    
    const loader = (files) => {
        let selectedFile = files[0].name;
        setIsFileSelected(true)
        setSelectedFileName(selectedFile)

        
        
        
    }
    const prepareOptions = (options) => {
        let array = []
        options.forEach((element) => {
            array.push({ value: element, label: element })
        });
        return array
    }
    useEffect(() => {
        setSideBarData([
            {
      
                title: 'تیم ها',
                path: '',
                icon: <img className='margin-left' src={Users}></img>,
                iconClosed:<img src={open}></img>,
                iconOpened: <img src={close}></img>,
            
                subNav: [

                {
                    title:'تیمی وجود ندارد',
                    path:'',
                    icon:<img className='fix-style' src={cricle}></img>
                }
                  
                ]
              },
              {
                title: 'پیگیری عملکرد',
                path: '/CreateTeam',
                icon: <img className='margin-left' src={chart}></img>
            
            
              },
              {
                title: 'مدیریت کارمندان',
                path: '',
                icon: <img className='margin-left' src={Manage}></img>
              },
              {
                title: 'ایجاد تیم جدید',
                path: '',
                icon: <img className='margin-left' src={CreateGroup}></img>
              },
            
              {
                title: 'خروج از حساب کاربری',
                path: '/',
                icon: <img className='margin-left' src={Exit}></img>
              }
        ])
        getEmployees()
            .then(res => {
                setOptions(prepareOptions(res.data.map(item => item.name)))
                console.log(res.data.map(item => item.name));
            }).catch(e => console.log('error in getEmployees'))


        getManagers()
            .then(res => {
                setOptions(prepareOptions(res.data.map(item => item.name)))
                console.log(res.data.map(item => item.name));
            }).catch(e => console.log('error in getManagers'))


    }, [])
    const submitForm = (form) => {
        form.preventDefault()
        console.log(selectedEmployees);

    }
    const click = (date) => {
        // let fd = new FormData();
        // fd.append('file',date.file[0])

        // console.log(fd);
        date["array"] = selectedEmployees;
        Swal.fire({
            title: 'فاک',
            text: 'تیم با موفقیت ایجاد شد',
            icon: 'success',
            confirmButtonText: 'تایید'
          })

         
    }

    return (
        <>
            <div className='CreateTeamForm-title'>
                <span>
                    ایجاد تیم جدید
                    
                </span>
            </div>
            <div className='CreateTeamForm-form'>
                <form 
                // onSubmit={e=>submitForm(e)}
                onSubmit={handleSubmit(click)}
                >
                    <div className='d-flex flex-column align-items-end'>
                        <label class="control-label">نام تیم</label>
                        <input 
                        id='team-name' 
                        className='form-control' 
                        placeholder='نام تیم را وارد کنید '
                        onChange={e=>setTeamName(e.target.value)}
                        name='name'
                        ref={register}
                        ></input>
                        {/* <span>heloo</span> */}
                    </div>
                    <br />
                    <div className='d-flex flex-column align-items-end'>
                        <label class="control-label"> افزودن عضو جدید</label>
                        <div>
                            {/* <img className='position-absolute fix-serch-icon-style' src={searchIcone}></img> */}
                            {/* <input id='name-of-new-member' className='form-control' placeholder='نام عضو جدید را جست و جو کنید '></input> */}
                           
                            <Select
                                isRtl={true}
                                id='name-of-new-member'
                                isMulti
                                name="colors"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder='نام عضو جدید را جست و جو کنید '
                                onChange = {(e)=>setSelectedEmployees(e)}
                            />

                        </div>
                    </div>
                    <br />
                    <div className='d-flex flex-column align-items-end'>
                        <label class="control-label">نام پروژه</label>
                        <input 
                        id='name-of-project' 
                        className='form-control' 
                        placeholder='نام پروژه را وارد کنید '
                        onChange={e=>setProjectName(e.target.value)}
                        ></input>
                    </div>
                    <br />
                    <div className='d-flex flex-column align-items-end'>
                        <label class="control-label"> مدیر پروژه</label>
                        {/* <input id='select-manager' className='form-control' placeholder='مدیر پروژه را انتخاب کنید'></input> */}
                        <Select
                            isRtl={true}
                            id='name-of-new-member'
                            options={options}
                            placeholder='مدیر پروژه را انتخاب کنید'
                            onChange = {e=>setManagerName(e)}
                        />
                    </div>
                    <br />
                    <div className='d-flex flex-column align-items-end' id='data-picker-container'>
                        {/* <label for='project-data-picker' class="control-label"></label> */}
                        {/* <DatePicker id='project-data-picker' selected={startDate} onChange={date => setStartDate(date)} /> */}
                        <DatePicker
                         name='dataPicker'
                        label='تاریخ تحویل پروژه' 
                        id='project-data-picker' 
                        className='project-data-picker' 
                        ref={register}
                        
                        onClickSubmitButton={(date)=>console.log(date.value.locale('fa').format('MMMM Do YYYY, h:mm:ss a'))} 
                        />
                         
                    </div>
                    <br />
                    <div className='upload-box'>
                        <button type='submit' className='create-team-submit-btn' onClick={()=>console.log(teamName)}>
                            ثبت
                        </button>
                        <div className='d-lg-flex flex-column align-items-end'>

                            <label class="control-label">مستندات پروژه</label>
                            <div>
                                <label for='upload-file-btn' className='upload-btn-file-lable'>
                                    {isFileSelected ?
                                        `${selectedFileName}:فایل انتخاب شده` :
                                        "انتخاب فایل"}

                                </label>
                                <input ref={register} name='file'  id='upload-file-btn' type='file' className='' onChange={e => loader(e.target.files)}></input>
                            </div>


                        </div>


                    </div>
                  
                </form>
                
            </div>


        </>
    )
}

export default CreateTeamForm
