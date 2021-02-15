import { React, useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
// import './ProjectsTable.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
const ProjectsTables = () => {
    const [projects, setprojects] = useState([
        { name: "پروژه", deadLine: '123456', roll: 'کارمند' },
        { name: "پروژه", deadLine: '123456', roll: 'کارمند' },
        { name: "پروژه", deadLine: '123456', roll: 'مدیر پروژه' },
        { name: "پروژه", deadLine: '123456', roll: 'مدیر پروژه' },
        { name: "پروژه", deadLine: '123456', roll: 'کارمند' }

    ])
    const renderTableRows = (project, index) => {
        return (
            <tr key={index}>
                <td><Link >{project.name}</Link></td>
                <td>{project.deadLine}</td>
                <td>{project.roll}</td>
                <td>
                    {project.roll === 'کارمند' ?
                        <button className='track-btn-disable' disabled>
                            اعلام وضعیت
                        </button>
                        :
                        <button className='track-btn'>
                            اعلام وضعیت
                        </button>

                    }


                </td>
            </tr>
        )
    }
    return (
        <>
            <div className='projects-table'>
                <div className='project-list-title'>
                    <span>
                        لیست پروژه ها
                </span>
                </div>
                <ReactBootstrap.Table borderless hover rounded-top>
                    <thead className='table-header'>
                        <tr>
                            <th>نام پروژه</th>
                            <th>تاریخ تحویل پروژه</th>
                            <th>سمت</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(renderTableRows)}
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        </>
    )
}

export default ProjectsTables
