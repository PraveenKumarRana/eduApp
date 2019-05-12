import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <Link className="navbar-brand" to="/"><i class="fas fa-book-reader rainbow"></i><span>eduApp</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse display-flex" id="navbarNav">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/courses">Courses</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/news">News</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="navbar-nav">
                                {!this.props.isLoggedIn && (
                                <div className="display-flex">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Sign In <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/aboutus">Sign Up</Link>
                                    </li>
                                </div>)}
                                {this.props.isLoggedIn && (
                                    <div className="display-flex">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/courses">Sign Out</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/news">Profile</Link>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;