import React from "react";
import {FormDebugger} from "./FormDebugger";
import "./form-style.css"
import video from "./contact-form-video-10mb.mp4"
import {useHistory} from "react-router";


export const ContactFormContents = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props

    // console.log("status", status.type, status.message)

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <>
            <video src={video} autoPlay muted className="background-video"></video>
            <div className="container">
                <div className="row">
                    <div className="col form-text-color">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col form-text-color">
                        <h2>Complete Form Below</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="contactFormName">Name</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="contactFormName"
                                        type="text"
                                        value={values.contactFormName}
                                        placeholder="Enter Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.contactFormName && touched.contactFormName && (
                                        <div className="alert alert-danger">
                                            {errors.contactFormName}
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="contactFormEmail">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="contactFormEmail"
                                        type="email"
                                        value={values.contactFormEmail}
                                        placeholder="Enter Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.contactFormEmail && touched.contactFormEmail && (
                                        <div className="alert alert-danger">
                                            {errors.contactFormEmail}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="contactFormSubject">Subject</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="contactFormSubject"
                                        type="text"
                                        value={values.contactFormSubject}
                                        placeholder="Enter Subject"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.contactFormSubject && touched.contactFormSubject && (
                                        <div className="alert alert-danger">
                                            {errors.contactFormSubject}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="contactFormMessage">Message</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <textarea
                                        className="form-control"
                                        name="contactFormMessage"
                                        // type="text"
                                        value={values.contactFormMessage}
                                        placeholder="Enter Message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows="5"
                                    />
                                </div>
                                {
                                    errors.contactFormMessage && touched.contactFormMessage && (
                                        <div className="alert alert-danger">
                                            {errors.contactFormMessage}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <button
                                    className="btn btn-info"
                                    type="button" onClick={handleClick}
                                >Home
                                </button>
                            </div>
                        </div>

                    </div>
                    {/*<FormDebugger {...props} />*/}
                </form>
                {
                    status && (<div className={status.type}>{status.message}</div>)
                }
            </div>

        </>
    )
}
