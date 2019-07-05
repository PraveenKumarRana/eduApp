import React, {Fragment} from 'react';
import './CourseDisplayCard.css';

const CourseDisplayCard = ({course}) => {
    return (
        <div className="card" style={{width: "300px"}}>
            <img src={course.course_image_url || course.image} className="card-img-top image-size" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.desc}</p>
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