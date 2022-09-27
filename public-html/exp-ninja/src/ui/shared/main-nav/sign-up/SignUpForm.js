import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {SignUpFormContent} from "./SignUpFormContent";
import {httpConfig} from "../../utils/http-config";


export const SignUpForm = () => {
	const signUp = {
		profileUserName: "",
		profileEmail: "",
		profilePassword: "",
		profilePasswordConfirm: "",
	};

	const validator = Yup.object().shape({
		profileUserName: Yup.string()
			.required("Profile Username is required"),
		profileEmail: Yup.string()
			.email("email must be a valid email")
			.required('email is required'),
		profilePassword: Yup.string()
			.required("Password is required")
			.min(8, "Password must be at least eight characters"),
		profilePasswordConfirm: Yup.string()
			.required("Password confirm is required")
			.min(8, "Password must be at least eight characters")
	});

	const submitSignUp = (values, {resetForm, setStatus}) => {
		httpConfig.post("/apis/sign-up/", values)
			.then(reply => {
					let {message, type} = reply;

					if(reply.status === 200) {
						resetForm();
					}
					setStatus({message, type});
				}
			);
	};


	return (

		<Formik
			initialValues={signUp}
			onSubmit={submitSignUp}
			validationSchema={validator}
		>
			{SignUpFormContent}
		</Formik>

	)
};
