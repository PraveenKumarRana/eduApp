import React, {Component, Fragment} from 'react';
import './ContactUs.css';
import GoogleMap from '../google_maps/GoogleMap';
import {query} from '../../store/action/queryMailer';
import {connect} from 'react-redux';
import $ from 'jquery';

class ContactUs extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            subject:"",
            detail:"",
            nameError:"",
            emailError:"",
            subjectError:"",
            detailError:""
        }
    }

    validate = () => {
        var nameError="";
        var emailError="";
        var subjectError="";
        var detailError="";

        if(!this.state.name){
            nameError="Name cannot be blank."
        } else {
            nameError="";
        }

        if(!this.state.email.includes("@") || this.state.email[this.state.email.length - 1]!=='.'){
            emailError = "Invalid email";
        } else {
            emailError = "";
        }

        if(!this.state.subject || this.state.subject.length > 15){
            subjectError="Subject length shoud be more then 3 words (or) 15 character."
        } else {
            subjectError="";
        }

        if(this.state.detail.length > 50 || !this.state.detail){
            detailError = "There should be atleast 50 - 60 words in your description."
        } else {
            subjectError="";
        }

        if(detailError || subjectError || nameError || emailError){
            this.setState({nameError, subjectError, detailError, emailError});
            return false;
        } else {
            return true;
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });
        this.validate()
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            this.props.query(this.state).then(
                () => {
                    console.log("Message Sent");
                }
            )
            .catch(err => {
                console.log(err);
            });
        } else{
            console.log("Form not submitted!");
        }

    }

    render(){
        return (
            <Fragment>
                <div className="contact-us-header">
                </div>

                <div className="contact-us-page">
                    <div className="item contact-body-left">
                        <div className="contact-body-left-top">
                            <div className="about item container-fluid">
                                <h3>eduApp</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="item container-fluid">
                                <b>Contact Us</b>
                                <p><b>Address : </b><br></br>Anna Nagar, Near Light House, Chennai-600038</p>
                                <p><b>Phone No : </b><br></br>9835XXXXXX</p>
                                <p><b>Email : </b><br></br>edxpraveenkumar@gmail.com</p>
                            </div>
                        </div>
                        <div className="query-form">
                            <h3>Query Help</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6" id="txtLeave">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control"  
                                            placeholder="Name"
                                            onChange={this.handleChange}
                                            />
                                        <div style={{color:'orangered', fontSize:"12px"}}>{this.state.nameError}</div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control"  
                                            placeholder="Email"
                                            onChange={this.handleChange}
                                            />
                                        <div style={{color:'orangered', fontSize:"12px"}}>{this.state.emailError}</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        className="form-control"  
                                        placeholder="Purpose of your Query"
                                        onChange={this.handleChange}
                                        />
                                    <div style={{color:'orangered', fontSize:"12px"}}>{this.state.subjectError}</div>
                                </div>
                                <div className="form-group">
                                    <label>Detail</label>
                                    <textarea 
                                    type="text" 
                                    name="detail" 
                                    className="form-control"  
                                    style={{height: "220px"}} 
                                    placeholder="Describe your query"
                                    onChange={this.handleChange}
                                    />
                                    <div style={{color:'orangered', fontSize:"12px"}}>{this.state.detailError}</div>
                                </div>
                                <button type="submit" className="orange-button" style={{marginLeft: "0px"}}>Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="item google-maps">
                        <GoogleMap/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        message: state
    }
}

export default connect(mapStateToProps, {query})(ContactUs);