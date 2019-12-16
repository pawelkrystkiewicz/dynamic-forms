import React, { Component } from 'react';
import { Formik } from 'formik';
import FormField from '../../lib/FormField';
import formData from './schema.json';
import { createYupSchema } from '../../lib/yupSchemaGenerator';
import * as yup from 'yup';
import { Form, Button, Checkbox } from 'antd';

const initialState = {
	email: null,
	password: null,
	remember: true
};

class LoginForm extends Component {
	renderFormElements = (props: any) =>
		formData.map((item, index) => {
			const fieldMap:any = { text: FormField, number: FormField };

			const Component = fieldMap[item.type];

			let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];

			if (item.type) {
				return (
					<Component
						key={index}
						label={item.label}
						name={item.id}
						type={item.type}
						placeholder={item.placeholder}
						value={props.values[item.id]}
						onChange={props.handleChange}
						error={error}
					/>
				);
			}
			return '';
		});

	render() {
		const initialValues = {};

		formData.forEach((item) => {
			initialValues[item.id] = item.value || '';
		});

		const yepSchema = formData.reduce(createYupSchema, {});
		console.log('yepSchema', yepSchema);
		const validateSchema = yup.object().shape(yepSchema);

		return (
			<div className="form">
				<h1>Form here</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validateSchema}
					onSubmit={(values, actions) => {
						console.log('values', values);
						console.log('actions', actions);
					}}
				>
					{(props) => (
						<Form onSubmit={props.handleSubmit} className="login-form">
							{/* <form onSubmit={props.handleSubmit}> */}
							{this.renderFormElements(props)}
							{/* <button type="submit">Submit</button> */}
							<Form.Item>
								<Checkbox
								//  onChange={(e) => updateState('remember', e.target.checked)}
								>
									Remember me
								</Checkbox>
								<a className="login-form-save-credentials" href="">
									Forgot password
								</a>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
								</Button>
								Or <a href="">register now!</a>
							</Form.Item>
							{/* </form> */}
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}

export default LoginForm;
