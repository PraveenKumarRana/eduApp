import React, {Fragment} from 'react';
import './CourseDisplayCard.css';

const CourseDisplayCard = ({course}) => {
    return (
        <div class="card" style={{width: "300px"}}>
            <img src={course.course_image_url} class="card-img-top image-size" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{course.name}</h5>
                <p class="card-text">{course.desc}</p>
                {course.instructor && (
                    <Fragment>
                        <h5>Instructor</h5>
                        <p>{course.instructor}</p>
                    </Fragment>
                )}
                
            </div>
        </div>
    )
}

export default CourseDisplayCard;