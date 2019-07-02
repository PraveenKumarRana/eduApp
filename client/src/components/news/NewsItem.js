import React, {Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import moment from 'moment';
import {getNewsItem} from '../../store/action/news'
import './NewsItem.css';
import {connect} from 'react-redux';

class NewsItem extends React.Component {
    render(){
        const style = {height:"440px", width:"100%"};
        
        const {news} = this.props;
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
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        news_item:state.news_item
    }
}

export default connect(mapStateToProps, {getNewsItem})(NewsItem);