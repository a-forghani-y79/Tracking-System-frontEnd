import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import open from "../../../assets/images/right-arrow.svg";
import close from "../../../assets/images/down-arrow.svg";
import Users from "../../../assets/images/users_logo.svg";
import chart from "../../../assets/images/pie-chart.svg";
import CreateGroup from "../../../assets/images/CreateGroup.svg";
import Manage from "../../../assets/images/manage.svg";
import Exit from "../../../assets/images/exit-svgrepo-com.svg";
import cricle from "../../../assets/images/CIRCLE.svg";

export const SidebarData = [
  {
      
    title: 'تیم ها',
    path: '',
    icon: <img className='margin-left' src={Users}></img>,
    iconClosed:<img src={open}></img>,
    iconOpened: <img src={close}></img>,

    subNav: [
    //   {
    //     title: 'نام تیم',
    //     path: '',
    //     icon: <img className='fix-style' src={cricle}></img>
    //   }
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
    icon: <img className='margin-left' src={Manage}></img>
  },

  {
    title: 'خروج از حساب کاربری',
    path: '/',
    icon: <img className='margin-left' src={Exit}></img>
  }
];
export default SidebarData