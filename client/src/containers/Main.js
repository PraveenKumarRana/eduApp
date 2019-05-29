import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import AboutUs from '../components/about_us/AboutUs';
import ContactUs from '../components/contact_us/ContactUs';
import Courses from '../components/courses/Courses';

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
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/contactus" component={ContactUs}/>
                </Switch>
            </div>
        )
    }
}

export default Main;