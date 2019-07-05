import React, {Component} from 'react';
import CourseDisplayCard from '../CourseDisplayCard';

class TopCourses extends Component{
    render(){
        const topCourses = [
            {
                name: "Walking through TensorFlow", 
                desc: "In this couse we will be learning the things which TensorFlow provides to us to Train the ML models.", 
                image: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/TensorFlow_banner.png?1556122983"
            },
        {
            name: "TOEFL® Test Preparation: The Insider’s Guide", 
            desc: "This test preparation course, developed by the exp…p English language learners improve their skills.",image: "https://embedwistia-a.akamaihd.net/deliveries/6392008267428627643c9231c0a03dd21584db64.jpg?origin_v2=1&image_crop_resized=1280x720"
        },
        {
            name: "Conducting an Informational Interview", 
            desc: "This is the capstone networking course. Put all th…rmational interview with a person of your choice.",image: "https://www.jobscan.co/blog/wp-content/uploads/2016/10/informational-interview.jpg"
        },
        {name: "Basic Spanish 1: Getting Started", desc: "Learn Spanish and explore Spanish culture in this …y language course, designed for English speakers.", image: "https://cdn.djaunter.com/wp-content/uploads/2017/03/spanish-language-learning-cover.jpg", time: "2019-07-05T09:31:40.835Z"}
        ];

        const TopList = topCourses.map(course => <CourseDisplayCard course={course}/>)
        return (
            <div className="display-flex-new">
                {TopList}
            </div>
        )
    }
}

export default TopCourses;