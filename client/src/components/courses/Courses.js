import React, {Component, Fragment} from 'react';
import CourseList from './CourseList';
import './Courses.css';

class Courses extends Component{
    render(){
        return(
            <Fragment>
                <div className="about-courses">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://www.acu.edu.au/-/media/feature/pagecontent/contenttabwithimage/study-teaching.jpg?h=630&w=1255&la=en&hash=379AE1014307AE4FC22980439B801A05" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://cdn.csu.edu.au/__data/assets/image/0006/2875965/M_Inclusive_Education_Banner_01.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://www.verywellmind.com/thmb/jbJ5PlWXRyO6NW_TbKuYqELvpFI=/3866x2580/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-470803747-56a8d18d5f9b58b7d0f56bd0.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                </div>
                <div className="about-page" style={{marginTop:"0px"}}>
                    <CourseList/>
                </div>
            </Fragment>
        )
    }
}

export default Courses;