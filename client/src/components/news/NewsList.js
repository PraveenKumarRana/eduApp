import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';

class NewsList extends Component{
    render(){
        const news = [
            {
                title: "News title",
                created_at: "12 Jan 2019",
                image: "https://colorlib.com/preview/theme/elearn/images/news_6.jpg",
                desc:"Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue.",
                username: "Praveen Kumar Rana",
                comments: 34
            },
            {
                title: "News title",
                created_at: "12 Jan 2019",
                image: "https://colorlib.com/preview/theme/elearn/images/news_6.jpg",
                desc:"Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue.",
                username: "Praveen Kumar Rana",
                comments: 3
            },
            {
                title: "News title",
                created_at: "12 Jan 2019",
                image: "https://colorlib.com/preview/theme/elearn/images/news_6.jpg",
                desc:"Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue.",
                username: "Praveen Kumar Rana",
                comments: 483
            }
        ];
        const newsList = news.map(news => <NewsItem news={news}/>)
        return(
            <Fragment>
                <div class="news-list">
                    {newsList}
                </div>
            </Fragment>
        )
    }
}
export default NewsList;