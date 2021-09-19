import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div className="header blue font1">
                <nav>
                    <ul className="main-nav">
                        <a href="http://localhost:3000/"><li>Home</li></a>
                        <a href="http://localhost:3000/"><li>About</li></a>
                        <a href="http://localhost:3000/"><li>Tenant Login</li></a>
                        <a href="http://localhost:3000/"><li>Manager Login</li></a>
                        <a className="contacts" href="http://localhost:3000/"><li>Contacts</li></a>
                    </ul>
		        </nav>
            </div>
        )
    }
}

export default Header