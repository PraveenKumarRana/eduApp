import React, {Component} from 'react';
import {Route, withRouter,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/homepage/Homepage';
import AboutUs from '../components/about_us/AboutUs';
import ContactUs from '../components/contact_us/ContactUs';
import Courses from '../components/courses/Courses';
import LandingPage from '../components/landing_page/LandingPage';
import AuthForm from '../components/auth_form/AuthForm';
import News from '../components/news/News';
import {authUser} from '../store/action/auth';
import withAuth from '../hocs/withAuth';

class Main extends Component{
    render(){
        const {authUser} = this.props;
        return(
            <div>
                <Switch>
                <Route exact path="/" render={props => <LandingPage error={this.props.errors} authUser={authUser} currentUser={this.props.currentUser} {...props}/>}/>
                    <Route exact path="/home" component = {withAuth(Homepage)}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/contactus" component={ContactUs}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/signin" render={props => <AuthForm buttonText="Sign In" error={this.props.errors} onAuth={authUser} {...props}/> }/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.error.message.message
    }
}

export default withRouter(
    connect(mapStateToProps, {authUser})(Main)
);