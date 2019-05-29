import React, {Component} from 'react';
import CourseDisplayCard from './CourseDisplayCard';

class CourseList extends Component{
    render(){
        const courses = [{
            title: "Hello World",
            desc: "This is the basic course on Computer Programming Course",
            instructor: "Praveen Kumar Rana",
            image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        },
        {
            title: "Hello World",
            desc: "This is the basic course on Computer Programming Course",
            instructor: "Praveen Kumar Rana",
            image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        },
        {
            title: "Hello World",
            desc: "This is the basic course on Computer Programming Course",
            instructor: "Praveen Kumar Rana",
            image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        },
        {
            title: "Hello World",
            desc: "This is the basic course on Computer Programming Course",
            instructor: "Praveen Kumar Rana",
            image: "https://prod-discovery.edx-cdn.org/media/course/image/72abaeb3-0856-4e89-906a-8b6eef402a1f-0988c3944c47.small.jpg"
        }
        ];

        const courseList = courses.map(course => <CourseDisplayCard course={course}/>)
        return (
            <div className="about-display">
                {courseList}
            </div>
        )
    }
}

export default CourseList;