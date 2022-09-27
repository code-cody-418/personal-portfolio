import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../../utils/FormDebugger";
import React from "react";
import {Button} from "react-bootstrap";

export const SignUpFormContent = (props) => {
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
					<label htmlFor="profileEmail">Email Address</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input
							className="form-control"
							name="profileEmail"
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
					<label htmlFor="profilePassword">Password</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input
							name="profilePassword"
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
					<label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input

							className="form-control"
							type="password"
							name="profilePasswordConfirm"
							placeholder="Password Confirm"
							value={values.profilePasswordConfirm}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					{errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
						<div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
					)}
				</div>


				<div className="form-group">
					<label htmlFor="profileUserName">Username</label>
					<div className="input-group">
						{/*<div className="input-group-prepend">*/}
						{/*	<div className="input-group-text">*/}
						{/*	</div>*/}
						{/*</div>*/}
						<input
							className="form-control"
							name="profileUserName"
							type="text"
							value={values.profileUserName}
							placeholder="Username"
							onChange={handleChange}
							onBlur={handleBlur}

						/>
					</div>
					{
						errors.profileUserName && touched.profileUserName && (
							<div className="alert alert-danger">
								{errors.profileUserName}
							</div>
						)
					}
				</div>

				<div className="form-group">
					<Button size="lg" className="signInOutButton border-0 me-3 mt-2" type="submit">Sign-Up Submit</Button>
					<Button
						size="lg"
						className="resetFormButton border-0 mt-2"
						onClick={handleReset}
						disabled={!dirty || isSubmitting}
					>Reset
					</Button>
				</div>


				{/*<FormDebugger {...props} />*/}
			</form>
			{
				status && (<div className={status.type}>{status.message}</div>)
			}
		</>


	)
};
