import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component = {Homepage}/>
                    <Route exact path="/about"/>
                </Switch>
            </div>
        )
    }
}

export default Main;