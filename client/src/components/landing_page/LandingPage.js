import React, {Component, Fragment} from 'react';
import './LandingPage.css';
import AuthForm from '../auth_form/AuthForm';

class LandingPage extends Component{
    render(){
        const {authUser, currentUser} = this.props;
        console.log("Printing the value of the authUser.");
        console.log(currentUser);
        console.log(authUser);
        return(
            <Fragment>
                <div className="landing-page-header about-page">
                    <div>
                        <h2>It's time to Study Online</h2>
                    </div>
                    <div>
                        <h1>Anytime, Anywhere</h1>
                    </div>
                    <h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled <br></br>it to make a type specimen book.
                    </h3>
                </div>
                <div className="display-flex-new">
                    <div className="bullet-info flex-wrap">
                        <ul>
                            <li><i className="fas fa-arrow-alt-circle-right rainbow bullet-point"></i>Get the best Currated Courses Online.</li>
                            <li><i className="fas fa-arrow-alt-circle-right rainbow bullet-point"></i>Buy once and use it forever with the latest update.</li>
                            <li><i className="fas fa-arrow-alt-circle-right rainbow bullet-point"></i>Use Q&A form to help and get help from your collegues </li>
                            <li><i className="fas fa-arrow-alt-circle-right rainbow bullet-point"></i>Study at your own pace on any device, anytime, anywhere but there should be Internet.</li>
                            <li><i className="fas fa-arrow-alt-circle-right rainbow bullet-point"></i>Get regular updates over your mail.</li>
                        </ul>
                    </div>
                    {!currentUser.isAuthenticated && (
                        <AuthForm className="flex-wrap" onAuth={authUser} buttonText="Sign Up" signUp="signUp"/>
                    )}
                </div>
                <div className="about-page container-fluid" style={{marginTop:"10px"}}>
                    <div className="display-flex bottom elearn-vision" style={{justifyContent:"center", alignItems:"center"}}>
                        <div className="image-content">
                            <img src="https://www.apple.com/v/education/home/b/images/meta/teaching-tools/og__c17f837o7qoi.png?201904112150" alt="img"></img>
                        </div>
                        <div className="text-content">
                            <h2>What do we provide to you?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="about-display our-platforms-main-goal">
                        <div className="text-content">
                            <h2>Where you will be after completing the courses.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="image-content">
                            <img src="https://static-news.moneycontrol.com/static-mcnews/2018/03/Logos.jpg" alt="img"></img>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;