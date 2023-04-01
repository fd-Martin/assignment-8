import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary border border-black">
                <div className="container">
                    <h1>Knowledge-Cafe</h1>
                    <a className="navbar-brand" href="#">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" className='rounded-circle' width="60" height="60" alt="" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;