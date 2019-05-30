import React, {Component, Fragment} from 'react';
import './AuthForm.css';

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"Username",
            email: "Email",
            password: "Password",
            profileImageUrl: "Image URL"
        }
    }

    render(){
        const {buttonText} = this.props;
        return(
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <button className="orange-button">{buttonText}</button>
                </form>
            </Fragment>
        )
    }
}

export default AuthForm;