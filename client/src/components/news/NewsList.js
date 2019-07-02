import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';
import {Route, Link} from 'react-router-dom';
import ShowMore from './ShowMore';
import $ from 'jquery';

class NewsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            news_content: "",
            className:"btn btn-primary read-button"
        }
    }

    componentDidMount = () => {
        $(".read-button").click(function(){
            alert("button clicked");
            $(".read-news").addClass("read-news-show");
        })
    }

    handleChange = (news, e) => {
        e.preventDefault();
        this.setState({
            news_content: news
        })
        console.log(this.state);
        console.log("handle change clicked.");
    }

    render(){
        console.log("Printing the data from the NewsList.");
        console.log(this.props.newsData);
        const newsList = this.props.newsData.map(news => (
        <div>
            <NewsItem key={news._id} news={news}/>
            <Link to={`/news/${news._id}`}>Read More</Link>
        </div>
        ));
        console.log("Loading the data from states.");
        console.log(this.state.news_content);
        const readNewsItem = (
                <div className="read-news">
                    <p>{this.state.news_content.title}</p>
                </div>
        )
        return(
            <Fragment>
                <div className="news-list">
                    {newsList}
                </div>
                    {readNewsItem}
            </Fragment>
        )
    }
}
export default NewsList;