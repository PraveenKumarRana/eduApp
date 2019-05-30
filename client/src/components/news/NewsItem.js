import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './NewsItem.css';

const NewsItem = ({news}) => {
    const style = {height:"340px", width:"100%"};
    return(
        <Fragment>
            <div className="news-item">
                <div className="news-item-header">
                    <h2>{news.title}</h2>
                    <div className="user-social-info">
                        <em>By {news.username}</em>
                        <em className="news-date"><span>{news.created_at}</span></em>
                        <em className="comments">Comments : <span>{news.comments}</span></em>
                    </div>
                    <img src={news.image} alt="image" style={style}/>
                    <p className="news-desc">
                        {news.desc}
                    </p>
                </div>
                <Link to="/news"><span className="orange-text">Read more</span></Link>
            </div>
        </Fragment>
    )
}

export default NewsItem;