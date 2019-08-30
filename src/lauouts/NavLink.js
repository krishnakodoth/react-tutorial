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

                        <li className="nav-item">
                            <Link
                                to='/core-js'
                                className="nav-link"
                                activeClassName="active">
                                Core JavaScript
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to='/file-upload'
                                className="nav-link"
                                activeClassName="active">
                                File Upload
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/pagination'
                                className="nav-link"
                                activeClassName="active">
                                Pagination
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/filter'
                                className="nav-link"
                                activeClassName="active">
                                Filter
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to='/mixin'
                                className="nav-link"
                                activeClassName="active">
                                Mixins
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/render-props'
                                className="nav-link"
                                activeClassName="active">
                                Render Props
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to='/react-chartjs-2'
                                className="nav-link"
                                activeClassName="active">
                                React-chartjs2
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to='/high-chart'
                                className="nav-link"
                                activeClassName="active">
                                HighChart
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/react-video'
                                className="nav-link"
                                activeClassName="active">
                                React Video
                            </Link>
                        </li>
                        

                        
                        

                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavLink;