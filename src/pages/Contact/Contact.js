import React from 'react';
import Footer from '../Footer/Footer';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="form-full">
            <div className="container overfolw-contact">
                <div className="row bg-color">
                    <div className="col-md-3"></div>
                    <div className="col md-6 contact-form form-body">
                        <div className="form-text">
                            <h1> <span className="mt-1 mb-0 border border-secondary border-top-0 border-start-0 border-end-0">Contact Us</span></h1>
                            <br />
                            <input className=" form-control" type="text" placeholder="Your Name" /><br />
                            <input className="mt-1 form-control" type="text" placeholder="Your Email Address" /><br />
                            <textarea className="mt-1 mb-0 form-control" name="" id="" cols="30" rows="10" placeholder="Type Your Message Here"></textarea>
                            <button className='btn-contact mt-2 form-control' >Submit</button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};
export default Contact;