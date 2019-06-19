import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';
import RecentItem from './RecentItem';

class RecentList extends Component{
    render(){
        const recentList = this.props.newsData.slice(0,3).map(news => <RecentItem news={news}/>)
        return(
            <Fragment>
                <div class="news-list">
                    {recentList}
                </div>
            </Fragment>
        )
    }
}

export default RecentList;