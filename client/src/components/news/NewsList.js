import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';

class NewsList extends Component{
    render(){
        const newsList = this.props.newsData.map(news => <NewsItem key={news._id} news={news}/>)
        return(
            <Fragment>
                <div className="news-list">
                    {newsList}
                </div>
            </Fragment>
        )
    }
}
export default NewsList;