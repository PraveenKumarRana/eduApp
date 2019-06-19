import React, {Component} from 'react';
import {connect} from 'react-redux';
import CourseDisplayCard from './CourseDisplayCard';
import {getCourses} from '../../store/action/courses';

class CourseList extends Component{
    componentWillMount(){
        // this.priventDefault();
        const courses = this.props.getCourses();
    }
    
    render(){
        console.log("Printing from the All Courses");
        console.log(this.props.courses);
        const {courses} = this.props;
        var courseList;
        // const courses = [{
        //     title: "Hello World",
        //     desc: "This is the basic course on Computer Programming Course",
        //     instructor: "Praveen Kumar Rana",
        //     image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        // },
        // {
        //     title: "Hello World",
        //     desc: "This is the basic course on Computer Programming Course",
        //     instructor: "Praveen Kumar Rana",
        //     image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        // },
        // {
        //     title: "Hello World",
        //     desc: "This is the basic course on Computer Programming Course",
        //     instructor: "Praveen Kumar Rana",
        //     image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        // },
        // {
        //     title: "Hello World",
        //     desc: "This is the basic course on Computer Programming Course",
        //     instructor: "Praveen Kumar Rana",
        //     image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        // }
        // ];
        if(courses){
            console.log("Printing the data from the courses.");
            console.log(courses);
            courseList = courses.map(course => <CourseDisplayCard course={course}/>)
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