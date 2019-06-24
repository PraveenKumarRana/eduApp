import React , {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';
import TopCourses from '../courses/top_rated_courses/TopCourses';
import TopRatedCourses from '../courses/top_rated_courses/TopRatedCourses';
import NewlyLaunched from '../courses/top_rated_courses/NewlyLaunchedCourses';

const Homepage = (props) => {
    const style = {marginTop: "-180px", padding:"25px"}
    return (
        <Fragment>
            <div className="landing-main-page">
                <div className="hiding-background-image">
                    <div className="landing-page-info-container container">
                        <div className="brand-name" style={{marginBottom: "-30px"}}>
                        <i className="fas fa-book-reader rainbow" style={{fontSize:"0.7in", height:"1in", textShadow:"0 0 0"}}></i><span>eduApp</span>
                        </div>
                        <div className="brand-name">
                            Complete Online Courses
                        </div>
                        <div className="centered-white-text">
                            <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled <br></br>it to make a type specimen book.
                            </h3>
                        </div>
                        <div className="display-flex">
                            <Link to="/about" className="orange-button" style={{textDecoration: "none", color:"white"}}>
                                <div className="display-flex">
                                    <div>Learn More</div>
                                    <div>></div>
                                </div>
                            </Link>
                            <Link to="/courses" className="orange-button" style={{textDecoration: "none", color:"white"}}>
                                <div className="display-flex">
                                    <div>See all Courses</div>
                                    <div>></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" style={style}>
                <h1>Some of the Popular Courses on eduApp</h1>
                <TopCourses/>
            </div>

            <div className="top-rated-courses">
                <h1>Top Rated Courses on eduApp</h1>
                <TopRatedCourses/>
            </div>

            <div className="newly-launched-courses">
                <h1>Currently Launched Courses on eduApp</h1>
                <NewlyLaunched/>
            </div>
        </Fragment>
    )
}

export default Homepage;