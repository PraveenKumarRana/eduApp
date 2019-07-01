import React, {Fragment} from 'react';
import moment from 'moment';
import {getNewsItem} from '../../store/action/news'

class NewsMoreShowPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news_item:[]
        }
    }
    
    componentWillMount= () => {
        let news = getNewsItem(this.props.params.id);
        this.setState({
            news_item:news
        })
    }

    render(){
        const style = {height:"440px", width:"100%"};
        return(
            <Fragment>
                <div className="news-item">
                    <div className="news-item-header">
                        <h2>{this.state.news_item.title}</h2>
                        <div className="user-social-info">
                            <em className="news-date"><span>{moment(this.state.news_item.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</span></em>
                            {this.state.news_item.comments && (
                                <Fragment>
                                    <em className="comments">Comments : 
                                    <span>{this.state.news_item.comments.length}</span></em>
                                </Fragment>
                            )}
                        </div>
                        <img src={this.state.news_item.imageUrl} alt={this.state.news_item.imageUrl} style={style}/>
                        <p className="news-desc">
                            {this.state.news_item.text}
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NewsMoreShowPage;