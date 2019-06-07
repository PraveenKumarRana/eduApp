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

    handleChange = e => {
        e.preventDefault();
        console.log("Printing from the handle change option.")
        console.log([e.target.name]);
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(this.state.email);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(this.state);
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
                                placeholder={this.state.email} 
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
                                        placeholder={this.state.username} 
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="profileImageUrl"
                                        placeholder={this.state.profileImageUrl}
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