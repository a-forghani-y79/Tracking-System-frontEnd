import { React, useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './projectsList.css'
const ProjectsList = () => {
    const [projects, setprojects] = useState([
        { name: "test", deadLine: '123456', manager: 'ghader' },
        { name: "test", deadLine: '123456', manager: 'ghader' },
        { name: "test", deadLine: '123456', manager: 'ghader' },
        { name: "test", deadLine: '123456', manager: 'ghader' },
        { name: "test", deadLine: '123456', manager: 'ghader' }

    ])

    const renderTableRows = (project, index) => {
        return (
            <tr key={index}>
                <td>{project.name}</td>
                <td>{project.deadLine}</td>
                <td>{project.manager}</td>
                <td>
                    <button className='track-btn'>
                        پیگیری وضعیت
                    </button>

                </td>
            </tr>
        )
    }
    return (
        <div className='projects-table'>
            <div className='project-list-title'>
                <span>
                    لیست پروژه ها
                </span>
            </div>
            <ReactBootstrap.Table borderless  hover rounded-top>
                <thead className='table-header'>
                    <tr>
                        <th>نام پروژه</th>
                        <th>تاریخ تحویل پروژه</th>
                        <th>مدیر پروژه</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {projects.map(renderTableRows)}
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default ProjectsList
