import React, {Component, Fragment} from 'react';
import CourseList from './CourseList';
import './Courses.css';

class Courses extends Component{
    render(){
        return(
            <Fragment>
                <div className="about-courses">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://www.acu.edu.au/-/media/feature/pagecontent/contenttabwithimage/study-teaching.jpg?h=630&w=1255&la=en&hash=379AE1014307AE4FC22980439B801A05" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://cdn.csu.edu.au/__data/assets/image/0006/2875965/M_Inclusive_Education_Banner_01.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://www.verywellmind.com/thmb/jbJ5PlWXRyO6NW_TbKuYqELvpFI=/3866x2580/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-470803747-56a8d18d5f9b58b7d0f56bd0.jpg" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
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