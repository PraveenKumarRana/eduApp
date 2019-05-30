import React, {Fragment} from 'react';
import './NewsItem.css';

const RecentItem = ({news}) => {
    const string = news.desc.substring(0,100)+"...";
    return(
        <Fragment>
            <div className="news-item" style={{padding:"auto 30px"}}>
                <div className="news-item-header">
                    <h4>{news.title}</h4>
                    <div className="user-social-info">
                        <em>By {news.username}</em>
                        <em className="news-date"><span>{news.created_at}</span></em>
                        <em className="comments">Comments : <span>{news.comments}</span></em>
                    </div>
                    <p className="news-desc">
                        {string}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default RecentItem;