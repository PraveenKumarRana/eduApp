import React, {Component, Fragment} from 'react';
import './LandingPage.css';
import AuthForm from '../auth_form/AuthForm';

class LandingPage extends Component{
    render(){
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
                <div className="display-flex">
                    <div class="bullet-info flex-wrap">
                        <ul>
                            <li><i class="fas fa-arrow-alt-circle-right rainbow"></i>Get the best Currated Courses Online.</li>
                            <li><i class="fas fa-arrow-alt-circle-right rainbow"></i>Buy once and use it forever with the latest update.</li>
                            <li><i class="fas fa-arrow-alt-circle-right rainbow"></i>Use Q&A form to help and get help from your collegues </li>
                            <li><i class="fas fa-arrow-alt-circle-right rainbow"></i>Study at your own pace on any device, anytime, anywhere but there should be Internet.</li>
                            <li><i class="fas fa-arrow-alt-circle-right rainbow"></i>Get regular updates over your mail.</li>
                        </ul>
                    </div>
                    <AuthForm className="flex-wrap" buttonText="Sign Up"/>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;