import React from "react";
import "./form-style.css"
import video from "./contact-form-video-10mb.mp4"
import {useHistory} from "react-router";


export const ContactFormContents = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = props

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
                                <label htmlFor="name">Name</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="name"
                                        type="text"
                                        value={values.name}
                                        placeholder="Enter Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.name && touched.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        placeholder="Enter Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.email && touched.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="subject">Subject</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <input
                                        className="form-control"
                                        name="subject"
                                        type="text"
                                        value={values.subject}
                                        placeholder="Enter Subject"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {
                                    errors.subject && touched.subject && (
                                        <div className="alert alert-danger">
                                            {errors.subject}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="message">Message</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                        </div>
                                    </div>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        value={values.message}
                                        placeholder="Enter Message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        rows="5"
                                    />
                                </div>
                                {
                                    errors.message && touched.message && (
                                        <div className="alert alert-danger">
                                            {errors.message}
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
                </form>
                {
                    status && (<div className={status.type}>{status.message}</div>)
                }
            </div>
        </>
    )
}
