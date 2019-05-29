import React from 'react';
import './CourseDisplayCard.css';

const CourseDisplayCard = ({course}) => {
    return (
        <div class="card" style={{width: "300px"}}>
            <img src={course.image} class="card-img-top image-size" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{course.title}</h5>
                <p class="card-text">{course.desc}</p>
                <h5>Instructor</h5>
                <p>{course.instructor}</p>
            </div>
        </div>
    )
}

export default CourseDisplayCard;