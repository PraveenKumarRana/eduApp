import React, {Component, Fragment} from 'react';
import './AuthForm.css';

const initialState =  {
    username:"",
    email: "",
    password: "",
    profileImageUrl: "",
    usernameError:"",
    passwordError:"",
    emailError:"",
    isEnabled: false
}
class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    validate = () => {
        var usernameError = "";
        var passwordError = "";
        var emailError = "";

        if(!this.state.username){
            usernameError="Username cannot be blank.";
        } else {
            usernameError = "";
        }
        if(!this.state.email.includes("@") && this.state.email[this.state.email.length - 1]!=='.'){
            emailError = "Invalid email";
        } else {
            emailError = "";
        }
        if(this.state.password.length <7){
            if(this.props.signUp){
                passwordError = "Password cannot be less then 7 character.";
            } else {
                passwordError = "Password field cannot be empty.";
            }
        } else {
            passwordError = "";
        }
        if(this.props.signUp){
            if(emailError || usernameError || passwordError){
                this.setState({emailError, usernameError, passwordError});
                return false;
            } else {
                return true;
            }
        } else {
            if(emailError || passwordError){
                this.setState({emailError,passwordError});
                return false;
            } else {
                return true;
            }
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        this.validate()
        const isValid = this.validate();
        if(isValid){
            this.setState({
                isEnabled: true
            })
        } else {
            this.setState({
                isEnabled: false
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid && this.props.signUp){
            const authType = this.props.signUp ? "signup": "signin";
            this.props.onAuth(authType, this.state)
                .then(() => {
                    console.log("You are successfully signed in.")
                    this.props.history.push("/home");
                })
                .catch(err => {
                    console.log(err);
                }) 
            // clear form
            this.setState(initialState);
        } else {
            const authType = this.props.signUp ? "signup": "signin";
            this.props.onAuth(authType, this.state)
                .then(() => {
                    console.log("You are successfully signed in.")
                    this.props.history.push("/home");
                })
                .catch(err => {
                    console.log(err);
                }) 
        }
    }

    render(){
        const {buttonText,signUp,error} = this.props;
        return(
            <Fragment>
                <div className="auth-form-box">
                    <h2>Whats you are waiting for?</h2>
                    <h2>{buttonText} now...</h2>
                    {error ? (
                        <p style={{color:"red", paddingTop:"10px", fontSize:"12px", marginBottom:"0px"}}>*&nbsp;{error}</p>
                    ):(<p></p>)}
                    <form onSubmit={this.handleSubmit} className="auth-forms">
                        <div style={{color:'orangered', fontSize:"12px"}}>{this.state.emailError}</div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                placeholder="Email" 
                                onChange={this.handleChange}
                                />
                        </div>
                        <div style={{color:'orangered', fontSize:"12px"}}>{this.state.passwordError}</div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password"
                                placeholder="********" 
                                onChange={this.handleChange}
                                />
                        </div>
                        {signUp && (
                            <Fragment>
                                <div style={{color:'orangered', fontSize:"12px"}}>{this.state.usernameError}</div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="username" 
                                        placeholder="Username" 
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="profileImageUrl"
                                        placeholder="Profile image"
                                        onChange={this.handleChange}
                                        />
                                </div>
                            </Fragment>
                        )}
                        
                        <button className="orange-button" style={{marginTop:"20px", marginBottom:"20px", marginLeft:"0px"}} disabled={!this.state.isEnabled}>{buttonText}</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default AuthForm;