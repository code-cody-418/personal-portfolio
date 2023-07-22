import React from "react";
import ReCAPTCHA from "react-google-recaptcha"

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

    function onChange(value) {
        values.recaptcha = value
    }

    return (
        <>
            <div className="row">
                <div className="col form-header form-text-color">
                    <p className="">Please Complete Form Below</p>
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
                    <div className="col">
                        <ReCAPTCHA sitekey="6LeVCBokAAAAAHkn6skYhkxRtuGYAp1ZP9wavZ8f" onChange={onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
