import React, {Component} from 'react';
import {connect} from 'react-redux';
import CourseDisplayCard from './CourseDisplayCard';
import {getCourses} from '../../store/action/courses';

class CourseList extends Component{
    componentWillMount(){
        // this.priventDefault();
        this.props.getCourses();
    }
    
    render(){
        console.log("Printing from the All Courses");
        console.log(this.props.courses);
        const {courses} = this.props;
        var courseList;
        if(courses){
            console.log("Printing the data from the courses.");
            console.log(courses);
            courseList = courses.map(course => <CourseDisplayCard key={course._id} course={course}/>)
        }
        return (
            <div className="about-display">
                {courseList}
            </div>
        )
    }
}

function mapsStateToProps(state){
    // debugger;
    return{
        courses: state.courses,
    }
}

export default connect(mapsStateToProps,{getCourses} )(CourseList);