import React, {Component, Fragment} from 'react';

class SearchBar extends Component{
    render(){
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" style={{width:"340px"}} type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Fragment>
        )
    }
}

export default SearchBar;