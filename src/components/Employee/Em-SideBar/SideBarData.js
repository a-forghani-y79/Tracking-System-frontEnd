import React from 'react';



import projects from "../../../assets/images/projects.svg";
import Exit from "../../../assets/images/exit-svgrepo-com.svg";


export const SidebarData = [
  {
      
    title: 'پروژه ها',
    path: '',
    icon: <img className='margin-left' src={projects}></img>

  },
  
  {
    title: 'خروج از حساب کاربری',
    path: '',
    icon: <img className='margin-left' src={Exit}></img>
  }

];
export default SidebarData