import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer-bar">

            {/* This contains the about info */}
            <div className="about item container-fluid">
                <h3>eduApp</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* This contains the secondary navbar info */}
            <div className="item container-fluid">
                <b>Quick Links</b>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
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

            {/* This contains the other links like wikipedia, udemy etc. */}
            <div className="item container-fluid">
                <b>Quick Menus</b>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Career <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home Tution</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Current in Tech World</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link " to="#">Books to Read</Link>
                    </li>
                </ul>
            </div>


            {/* This content the contact information */}
            <div className="item container-fluid">
                <b>Contact Us</b>
                <p><em>Address : </em>Anna Nagar, Near Light House, Chennai-600038</p>
                <p><em>Phone No : </em>9835XXXXXX</p>

                <b>Follow Us</b>
                <div className="social-contact">
                    <div className="contact-item"><i class="fab fa-facebook"></i></div>
                    <div className="contact-item"><i class="fab fa-github"></i></div>
                    <div className="contact-item"><i class="fab fa-linkedin"></i></div>
                    <div className="contact-item"><i class="fab fa-instagram"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;