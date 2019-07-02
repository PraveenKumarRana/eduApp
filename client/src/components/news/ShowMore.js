import React from 'react';
import {getNewsItem} from '../../store/action/news';
import {connect} from 'react-redux';
import moment from 'moment';

class ShowMore extends React.Component{
    componentWillMount = () => {
        localStorage.setItem("news_id",this.props.match.params.id);
        const id = this.props.match.params.id || localStorage.getItem("news_id")
        this.props.getNewsItem(id);
    }

    render(){
        console.log("Printing the news_item.");
        console.log(this.props.news_item);
        var title="", text="", imageUrl="", time="";
        if(this.props.news_item[0]){
            title =  this.props.news_item[0].title;
            time =  this.props.news_item[0].time;
            text =  this.props.news_item[0].text;
            imageUrl =  this.props.news_item[0].imageUrl;
        }
        return(
            <div className="news_reading_page">
                <div className="reading-part container">
                    {title && (
                        <div className="reading-page-news-heading container">
                            <h1>{title}</h1>
                        </div>
                    )}
                    <hr></hr>
                    { time && (
                        <em className="news-date container"><span style={{textAlign:"center" ,color:"orangered"}}>{moment(time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</span></em>
                    )}

                    {imageUrl && (
                        <div className="reading-page-image container">
                            <img src={imageUrl} alt={imageUrl}/>
                        </div>
                    )}

                    {text && (
                        <div className="reading-page-text container">
                            <p>{text}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    // debugger;
    return {
        news_item:state.news
    }
}

export default connect(mapStateToProps, {getNewsItem})(ShowMore);