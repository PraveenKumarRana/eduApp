import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Navbar.css';
import {logout} from '../../store/action/auth';
import $ from 'jquery';

class Navbar extends Component{
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount = () => {
        $(".display-profile").click(function(){
            $(".profile-window").toggleClass("profile-window-hide");
        })
    }

    render(){
        console.log(this.props.currentUser.isAuthenticated);
        console.log(this.props.currentUser);
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <Link className="navbar-brand" to="/"><i className="fas fa-book-reader rainbow"></i><span>eduApp</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse display-flex" id="navbarNav">
                        <div>
                            <ul className="navbar-nav">
                                {/* <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li> */}
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">About Us</Link>
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
                                {this.props.currentUser.isAuthenticated ? (
                                    <div className="display-flex">
                                        <li className="nav-item">
                                            <p className="display-profile">Account</p>
                                            <div className="profile-window profile-window-hide">
                                                <div className="profile-page-background-image">

                                                </div>
                                                <img src={this.props.currentUser.user.profileImageUrl || "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"} alt={"..."}/>
                                                <strong>{this.props.currentUser.user.username}</strong>
                                                <li className="nav-item active">
                                                    <Link className="logout-menu" to="#" onClick={this.logout}>Log out</Link>
                                                </li>
                                            </div>
                                        </li>
                                    </div>
                                ):(
                                    <div className="display-flex">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/signin">Sign In <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Sign Up</Link>
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

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps,{logout})(Navbar);