import React, {Component, Fragment} from 'react';
import CourseList from './CourseList';
import './Courses.css';

class Courses extends Component{
    render(){
        return(
            <Fragment>
                <div className="about-courses">
                </div>
                <div className="about-page" style={{marginTop:"0px"}}>
                    <CourseList/>
                </div>
            </Fragment>
        )
    }
}

export default Courses;