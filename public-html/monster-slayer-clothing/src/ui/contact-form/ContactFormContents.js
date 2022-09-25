import React from "react";
import {FormDebugger} from "./FormDebugger";
import "./form-style.css"
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
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group form-text-color">
                                <label htmlFor="contactFormName">Name</label>
                                <div className="input-group">
                                    {/*<div className="input-group-prepend">*/}
                                    {/*    <div className="input-group-text">*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
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
                                    {/*<div className="input-group-prepend">*/}
                                    {/*    <div className="input-group-text">*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
                                    {/*<div className="input-group-prepend">*/}
                                    {/*    <div className="input-group-text">*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
                                    {/*<div className="input-group-prepend">*/}
                                    {/*    <div className="input-group-text">*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
                    {
                        status && (<div className={status.type}>{status.message}</div>)
                    }
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-group">
                                <button className="btn btn-primary submitButton" type="submit">Submit</button>
                            </div>
                        </div>
                        {/*<div className="col-md-2">*/}
                        {/*    <div>*/}
                        {/*        <button*/}
                        {/*            className="btn btn-info"*/}
                        {/*            type="button" onClick={handleClick}*/}
                        {/*        >Home*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                    {/*<FormDebugger {...props} />*/}
                </form>

            </div>

        </>
    )
}
