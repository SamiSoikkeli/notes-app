import React from 'react'
import ReactSwitch from 'react-switch';

const Navbar = ({ toggleTheme, theme  }) => {
    return (
        <div className="nav-container">
            <h1>Notes Application</h1>
            <div className="nav-theme-switch">
                <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
            </div>
        </div>
    )
}

export default Navbar