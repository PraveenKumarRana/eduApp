import React, {Fragment} from 'react';
import moment from 'moment';
import './NewsItem.css';

const RecentItem = ({news}) => {
    const string = news.text.substring(0,100)+"...";
    return(
        <Fragment>
            <div className="news-item" style={{padding:"auto 30px"}}>
                <div className="news-item-header">
                    <b>{news.title}</b>
                    <div className="user-social-info">
                        {/* <em>By {news.username}</em> */}
                        <em className="news-date"><span>{moment(news.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</span></em>
                        {/* <em className="comments">Comments : <span>{news.comments}</span></em> */}
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