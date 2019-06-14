import React, {Component, Fragment} from 'react';
import './AuthForm.css';

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email: "",
            password: "",
            profileImageUrl: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup": "signin";
        this.props.onAuth(authType, this.state)
            .then(() => {
                console.log("You are successfully signed in.")
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
            }) 
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
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                placeholder="Email" 
                                onChange={this.handleChange}
                                />
                        </div>
                        <div class="form-group">
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
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="username" 
                                        placeholder="Username" 
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <div class="form-group">
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
                        
                        <button className="orange-button" style={{marginTop:"20px", marginBottom:"20px", marginLeft:"0px"}}>{buttonText}</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default AuthForm;