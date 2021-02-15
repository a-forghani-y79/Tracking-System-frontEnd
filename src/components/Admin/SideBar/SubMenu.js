import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useRouteMatch,useHistory } from 'react-router-dom'




const SidebarLink = styled(Link)`

  }
`;

const SidebarLabel = styled.span`

`;

const DropdownLink = styled(Link)`

  }
`;

const SubMenu = (props) => {
    const [subnav, setSubnav] = useState(false);
    const match = useRouteMatch();
    const history = useHistory()

    const showSubnav = () => {
        setSubnav(!subnav);
        console.log('hello')
    }
    const testFunc = ()=>{
        console.log(props)
        if(props.item.path !== ''){
            history.push(match.url + props.item.path)
            console.log(match.url + props.item.path);
        }
           
    }

    return (
        <>
            {/* replace Link tage with a tag */}
            <Link   className='decoration' onClick={props.item.subNav && showSubnav } >
                <div className="element" onClick={testFunc}>
                    <div>
                        {props.item.subNav && subnav
                            ? props.item.iconOpened
                            : props.item.subNav
                                ? props.item.iconClosed
                                : null}
                    </div>
                    <div >

                        <span>{props.item.title}</span>
                        {props.item.icon}
                    </div>

                </div>

            </Link>
            {subnav &&
                props.item.subNav.map((item, index) => {

                    
                    return (
                        <div className='subElement'>
                            {/* replace Link tage with a tag */}
                          {  console.log(index)}
                            <a  key={index}>

                                <span>{item.title}</span>
                                {item.icon}
                            </a>
                        </div>

                    );
                })}
        </>
    );
};

export default SubMenu;