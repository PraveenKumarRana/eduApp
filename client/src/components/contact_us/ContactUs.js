import React, {Component, Fragment} from 'react';
import './ContactUs.css';

class ContactUs extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Fragment>
                <div className="contact-us-header">
                </div>

                <div className="contact-us-page">
                    <div className="item contact-body-left">
                        <div class="contact-body-left-top">
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
                                <div className="q-item">
                                    <label>Name<input className="form-control"></input></label>
                                    <label>Subjec<input className="form-control"></input></label>
                                </div>
                                <div className="q-item">
                                    <label>Email<input className="form-control"></input></label>
                                    <label>Phone No<input className="form-control"></input></label>
                                </div>
                                <div className="q-item">
                                    <label>Name<textarea className="form-control"></textarea></label>
                                </div>
                                <div className="q-item">
                                    <button type="submit" class="orange-button">Submit</button>
                                </div> 
                            </form>
                        </div>
                    </div>
                    <div className="item google-maps">
                        <h1>Google Maps will be comming soon...</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactUs;