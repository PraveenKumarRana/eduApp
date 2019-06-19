import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './News.css';
import NewsList from './NewsList';
import RecentList from './RecentList';
import SearchBar from './SearchBar';
import {getNews} from '../../store/action/news';
import {connect} from 'react-redux';

class News extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getNews();
    }

    render(){
        return (
            <Fragment>
                <div className="news-header">
                </div>
                <div className="news-container-flex">
                    <div className="left-pane">
                        <NewsList newsData={this.props.news}/>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="right-pane">
                        <div className="search-box" style={{marginBottom:"30px!important"}}>
                            <SearchBar/>
                        </div>
                        <div className="recent-item">
                            <h2>Recent Item</h2>
                            <div>
                                <RecentList newsData={this.props.news}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        news:state.news
    }
}

export default connect(mapStateToProps, {getNews})(News);