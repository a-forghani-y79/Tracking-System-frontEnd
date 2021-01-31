import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const SidebarLink = styled(Link)`

  }
`;

const SidebarLabel = styled.span`

`;

const DropdownLink = styled(Link)`

  }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link className='decoration' onClick={item.subNav && showSubnav}>
                <div className="element">
                    <div>
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                                ? item.iconClosed
                                : null}
                    </div>
                    <div >
                        
                        <span>{item.title}</span>
                        {item.icon}
                    </div>

                </div>

            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <div className='subElement'>
                            <Link  key={index}>
                                
                                <span>{item.title}</span>
                                     {item.icon} 
                            </Link>
                        </div>

                    );
                })}
        </>
    );
};

export default SubMenu;