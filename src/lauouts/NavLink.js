import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
// NavLink to work with activeClassName
// Here my class name and NavLink are conflicting
// So I renamed NavLink to Link 

class NavLink extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" activeClassName="active">Home </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            to='/bootstrap' 
                            className="nav-link"
                            activeClassName="active">
                            Bootstrap
                            </Link>
                        </li>

                        <li className="nav-item">
                        <Link 
                            to='/calculator' 
                            className="nav-link"
                            activeClassName="active">
                            Calculator
                            </Link>
                        </li>
                                       
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavLink;