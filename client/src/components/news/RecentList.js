import React, {Component, Fragment} from 'react';
import RecentItem from './RecentItem';

class RecentList extends Component{
    render(){
        const recentList = this.props.newsData.slice(0,3).map(news => <RecentItem key={news._id} news={news}/>)
        return(
            <Fragment>
                <div className="news-list">
                    {recentList}
                </div>
            </Fragment>
        )
    }
}

export default RecentList;