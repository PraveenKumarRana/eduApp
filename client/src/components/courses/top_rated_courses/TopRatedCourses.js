import React, {Component} from 'react';
import CourseDisplayCard from '../CourseDisplayCard';

class TopRatedCourses extends Component{
    render(){
        const topRated = [{
            title: "Natural Language Processing in TensorFlow",
            desc: "If you are a software developer who wants to build scalable AI-powered algorithms, you need to understand how to use the tools to build them. This Specialization will teach you best practices for using TensorFlow, a popular open-source framework for machine learning.",
            instructor: "deeplearning.ai",
            image: "https://image.slidesharecdn.com/jpkablerhighwaytonaturallanguageprocessing-180626230227/95/natural-language-processing-with-alteryx-spacy-and-tensorflow-1-638.jpg?cb=1530558109"
        },
        {
            title: "Structuring Machine Learning Projects",
            desc: "You will learn how to build a successful machine learning project. If you aspire to be a technical leader in AI, and know how to set direction for your team's work, this course will show you how.",
            instructor: "deeplearning.ai",
            image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f6/53bf90104d11e8b2d89d7efe59d41d/CarouselAds_DL_ML.png?auto=format%2Ccompress&dpr=2.625"
        },
        {
            title: "Convolutional Neural Networks",
            desc: "This course will teach you how to build convolutional neural networks and apply it to image data. Thanks to deep learning, computer vision is working far better than just two years ago, and this is enabling numerous exciting applications ranging from safe autonomous driving, to accurate face recognition, to automatic reading of radiology images. ",
            instructor: "deeplearning.ai",
            image: "https://www.mdpi.com/information/information-07-00061/article_deploy/html/images/information-07-00061-g001.png"
        },
        {
            title: "Serverless Machine Learning with Tensorflow",
            desc: "This one-week accelerated on-demand course provides participants a a hands-on introduction to designing and building machine learning models on Google Cloud Platform.",
            instructor: "Google Cloud",
            image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/34/822130593d11e7b1e257a03557c934/Serverless-ML-v2.jpg?auto=format%2Ccompress&dpr=2.625"
        }
        ];

        const TopRated = topRated.map(course => <CourseDisplayCard course={course}/>)
        return (
            <div className="display-flex-new">
                {TopRated}
            </div>
        )
    }
}

export default TopRatedCourses;