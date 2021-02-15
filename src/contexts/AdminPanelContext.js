import { React, useState, createContext, useContext,useEffect } from 'react';


export const Wrapper = createContext()



export const AdminPanelContext = (props) => {
    const [isHome,setIsHome] = useState(false)

    useEffect(()=>{
        console.log('context')
    })
    return (
        <Wrapper.Provider value={[isHome,setIsHome]}>
            {props.children}
        </Wrapper.Provider>
        
    )
}


