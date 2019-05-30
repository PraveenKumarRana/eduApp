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
        const {buttonText,signUp} = this.props;
        return(
            <Fragment>
                <div className="auth-form-box">
                    <h2>Whats you are waiting for?</h2>
                    <h2>{buttonText} now...</h2>
                    <form onSubmit={this.handleSubmit} className="auth-forms">
                        <div class="form-group">
                            <input type="email" className="form-control" placeholder={this.state.email}></input>
                        </div>
                        <div class="form-group">
                            <input type="password" className="form-control" placeholder="********"></input>
                        </div>
                        {signUp && (
                            <Fragment>
                                <div class="form-group">
                                    <input type="text" className="form-control" placeholder={this.state.username}></input>
                                </div>
                                <div class="form-group">
                                    <input type="text" className="form-control" placeholder={this.state.profileImageUrl}></input>
                                </div>
                            </Fragment>
                        )}
                        
                        <button className="orange-button" style={{marginTop:"20px", marginBottom:"20px", marginLeft:"0px"}}>{buttonText}</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default AuthForm;