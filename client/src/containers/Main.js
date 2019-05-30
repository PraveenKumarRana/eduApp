import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import AboutUs from '../components/about_us/AboutUs';
import ContactUs from '../components/contact_us/ContactUs';
import Courses from '../components/courses/Courses';
import LandingPage from '../components/landing_page/LandingPage';
import AuthForm from '../components/auth_form/AuthForm';
import News from '../components/news/News';

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
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/home" component = {Homepage}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/contactus" component={ContactUs}/>
                    <Route exact path="/news" component={News}/>
                    {/* All the routes should go before this div other wise it will not work properly. */}
                    <div style={{margin:"125px auto 30px auto"}}>
                    <Route exact path="/signin" render={props => <AuthForm buttonText="Sign In"/>}/>
                    </div>
                </Switch>
            </div>
        )
    }
}

export default Main;