// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {FormDebugger} from "../../FormDebugger";
import React from "react";
import "./menuStyle.css"
import {Button} from "react-bootstrap";

export const SignInFormContent = (props) => {
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
	} = props;
	return (
		<>
			<form onSubmit={handleSubmit}>
				{/*controlId must match what is passed to the initialValues prop*/}
				<div className="form-group">
					<label htmlFor="profileEmail" className="text-white font-weight-bold">Email Address</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*		<FontAwesomeIcon icon="envelope"/>*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input
							className="form-control"
							id="profileEmail"
							type="email"
							value={values.profileEmail}
							placeholder="Enter email"
							onChange={handleChange}
							onBlur={handleBlur}

						/>
					</div>
					{
						errors.profileEmail && touched.profileEmail && (
							<div className="alert alert-danger">
								{errors.profileEmail}
							</div>
						)

					}
				</div>
				{/*controlId must match what is defined by the initialValues object*/}
				<div className="form-group">
					<label htmlFor="profilePassword" className="text-white font-weight-bold">Password</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*		<FontAwesomeIcon icon="key"/>*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input
							id="profilePassword"
							className="form-control"
							type="password"
							placeholder="Password"
							value={values.profilePassword}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.profilePassword && touched.profilePassword && (
						<div className="alert alert-danger">{errors.profilePassword}</div>
					)}
				</div>

				<div className="form-group">
					<Button size="lg" className="signInOutButton border-0 me-3 mt-2" type="submit">Sign-In Profile</Button>
				</div>
				{/*<FormDebugger {...props} />*/}
			</form>
			{status && (<div className={status.type}>{status.message}</div>)}
		</>
	)
};
