import React from 'react';
import './sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar-on">
            <div className="burger-menu-items">
                <div className="burger-links">
                    <ul>
                        <li className="burger-items">Overview</li>
                        <li className="burger-items">Pages</li>
                        <li className="burger-items">Template</li>
                    </ul>
                </div>
                <button className='contactus'>Contact us</button>
            </div>
        </div>
    )
}

export default Sidebar;