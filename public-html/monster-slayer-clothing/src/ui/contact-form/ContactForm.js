import React from 'react';
import {httpConfig} from "../../utils/httpConfig";
import * as Yup from "yup"
import {Formik} from "formik"

import {ContactFormContents} from "./ContactFormContents";

export const ContactForm = () => {

    const contactForm = {
        contactFormName: "",
        contactFormEmail: "",
        contactFormSubject: "",
        contactFormMessage: "",
    }

    const validator = Yup.object().shape({
        contactFormName: Yup.string()
            .required("Name is required"),
        contactFormEmail: Yup.string()
            .required("Email is required"),
        contactFormSubject: Yup.string()
            .required("Subject is required"),
        contactFormMessage: Yup.string()
            .required("Message is required")
    })

    const submitContactForm = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/contact-form/", values)
            .then(reply => {
                let { message, type } = reply

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
