import React from 'react'
import seeting_icon from '../images/icons8-settings.svg'
import place_marker from '../images/icons8-place_marker.svg'
import menu from '../images/icons8-menu.svg'
import megaphone from '../images/icons8-megaphone-101.svg'
import {withRouter} from 'react-router-dom'
const BottomNavbar = ({history}) => {
    return (
        <div>
            <div className="navbar">
        <a href="#home" className="active"><img src={seeting_icon} onClick={()=>{
            history.push({
                pathname:'/Setting'
            })

        }} alt="seeting-icon" /></a>
        <a href="#news"><img src={place_marker} alt="place-icon" /></a>
        <a href="#contact"><img src={menu}  alt="menu-icon"/></a>

    </div>
    <div className="circle">
<div className="circle-inside"><img src={megaphone} alt="megaphone-icon" /></div>
    </div>
        </div>
    )
}

export default withRouter(BottomNavbar)
