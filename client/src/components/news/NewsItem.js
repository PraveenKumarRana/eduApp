import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import './NewsItem.css';

const NewsItem = ({news}) => {
    console.log(news);
    const style = {height:"440px", width:"100%"};
    return(
        <Fragment>
            <div className="news-item">
                <div className="news-item-header">
                    <h2>{news.title}</h2>
                    <div className="user-social-info">
                        {/* <em>By {news.username}</em> */}
                        <em className="news-date"><span>{moment(news.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</span></em>
                        {news.comments && (
                            <Fragment>
                                <em className="comments">Comments : 
                                <span>{news.comments.length}</span></em>
                            </Fragment>
                        )}
                        
                    </div>
                    <img src={news.imageUrl} alt={news.imageUrl} style={style}/>
                    <p className="news-desc">
                        {news.text}
                    </p>
                </div>
                <Link to="/news"><span className="orange-text">Read more</span></Link>
            </div>
        </Fragment>
    )
}

export default NewsItem;