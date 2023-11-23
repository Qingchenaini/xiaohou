import React from "react"
import './navbar.scss'
import { NavLink } from "react-router-dom";


interface NavBarProps {
    ndata: { src: string; alt: string, link: string }; // 定义参数的类型
}
const NavBar: React.FC<NavBarProps> = ({ ndata }) => {
    return (
        <NavLink to={ndata.link} className='nlink'>
            <div className="nav-box">

                <img src={ndata.src} alt={ndata.alt} className="nav-img" />
                <span className="nav-title">{ndata.alt}</span>

            </div>
        </NavLink>
    )
}
export default NavBar