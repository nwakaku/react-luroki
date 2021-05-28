import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='container flex'>
                <h1 className='logo'>Wisdom</h1>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>Doc</a></li> 
                    </ul>
                    
                </nav>
            </div>
        </div>
    )
}

export default NavBar
