import React from 'react';
import {httpConfig} from "../utils/httpConfig";
import * as Yup from "yup"
import {Formik} from "formik"

import {ContactFormContents} from "./ContactFormContents";

export const ContactForm = () => {

    const contactForm = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }

    const validator = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .required("Email is required"),
        subject: Yup.string()
            .required("Subject is required"),
        message: Yup.string()
            .required("Message is required")
    })

    const submitContactForm = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/", values)
            .then(reply => {
                let { message, type } = reply
                console.log(reply);
                if(reply.status === 200 ) {
                    resetForm()
                }
                setStatus({message, type})
            })
    }

    return (
        <Formik
            initialValues={contactForm}
            onSubmit={submitContactForm}
            validationSchema={validator}
            >
            {ContactFormContents}
        </Formik>
    )
}
