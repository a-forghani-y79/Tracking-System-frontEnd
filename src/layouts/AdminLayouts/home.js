import React ,{useContext,useEffect} from 'react'
import './home.css'
import { Wrapper } from "../../contexts/AdminPanelContext"
import { sideBarWrapper} from "../../contexts/AdminSideBarContext";

import open from "../../assets/images/right-arrow.svg";
import close from "../../assets/images/down-arrow.svg";
import Users from "../../assets/images/users_logo.svg";
import chart from "../../assets/images/pie-chart.svg";
import CreateGroup from "../../assets/images/CreateGroup.svg";
import Manage from "../../assets/images/manage.svg";
import Exit from "../../assets/images/exit-svgrepo-com.svg";
import cricle from "../../assets/images/CIRCLE.svg";

const Home = () => {
    // const [isHome,setIsHome] = useContext(Wrapper)
    const [sideBarData, setSideBarData] = useContext(sideBarWrapper);
    useEffect(()=>{
            // setIsHome(true);
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
                  title: 'خروج از حساب کاربری',
                  path: '/',
                  icon: <img className='margin-left' src={Exit}></img>
                }
              ])
            console.log("home");
    },[])
    return (
        <div className='home-container'>
            <div className='group-image-container'>

            </div>

        </div>
    )
}

export default Home
