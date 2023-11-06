import React from "react"
import './navbar.scss'

const NavBar: React.FC = () => {
    return (
        <div className="nav-box">
            <img src="https://iconfont.alicdn.com/p/avatar/iconfont/avatar5.png" alt="主页" className="nav-img"/>
            <span className="nav-title">主页</span>
        </div>
    )
}
export default NavBar