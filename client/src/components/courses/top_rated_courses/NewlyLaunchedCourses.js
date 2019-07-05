import React, {Component} from 'react';
import CourseDisplayCard from '../CourseDisplayCard';
import {connect} from 'react-redux';

class NewlyLaunched extends Component{
    render(){
        console.log("Printing from newly Launched.");
        console.log(this.props.courses);
        const newCourses = [
            {
                name: "Introduction to Machine Learning", 
                desc: "Here you will be introduced to the basics of the ML algorithm, its application, etc.", 
                image: "https://cdn-images-1.medium.com/max/1200/1*k5LiTi5lt_ND02kaBT_SAA.jpeg"
            },
            {
                name: "Introduction to C++", desc: "Here you will be introduced to the basics of the C… basics, algorithms in c++, its application, etc.", image: "https://is2-ssl.mzstatic.com/image/thumb/Purple125…12MB-sRGB-0-0-0-85-220-0-0-0-6.png/1200x630wa.png"
            },
            {
                name: "Programming in C", 
                desc: "Here you will be introduced to the basics of the C…f our learned content we will be solving proglem.", 
                image: "http://www.trytoprogram.com/images/c-first-program.jpg"
            },
            {
                name: "Deep Learning", 
                desc: "In this couse we will be starting from the basics …our specialization in the Deep Learning Concepts.", 
                image: "https://cdn-images-1.medium.com/max/1200/1*yrgbW7GvOcp94f-5HZcmyQ.jpeg"
            }
        ];

        const NewCourses = newCourses.map(course => <CourseDisplayCard course={course}/>)
        return (
            <div className="display-flex-new">
                {NewCourses}
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

export default connect(mapsStateToProps,{})(NewlyLaunched);