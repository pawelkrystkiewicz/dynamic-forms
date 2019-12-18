import React, { Component } from 'react';
import { Formik } from 'formik';
import FormField from '../../lib/FormField';
import formData from './schema.json';
import { createYupSchema } from '../../lib/yupSchemaGenerator';
import * as yup from 'yup';
import { Form, Button, Checkbox } from 'antd';
import './styles.css';

class LoginForm extends Component {
	renderFormElements = (props: any) =>
		formData.map((item, index) => {
			const fieldMap: any = { text: FormField, number: FormField, password: FormField };
			const Component = fieldMap[item.type];

			let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];

			if (item.type) {
				return (
					<Component
						key={index}
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
		const initialValues: any = {};

		formData.forEach((item) => {
			initialValues[item.id] = '';
		});

		const yepSchema = formData.reduce(createYupSchema, {});

		const validateSchema = yup.object().shape(yepSchema);

		return (
			<div className="form">
				<h1>Login</h1>
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
							{this.renderFormElements(props)}
							<Form.Item>
								<div className="form--access-controls">
									<Checkbox //onChange={(e) => updateState('remember', e.target.checked)}
									>
										Remember me
									</Checkbox>
									<a className="form--save-credentials" href="">
										Forgot password
									</a>
								</div>
								<div className="form-buttons">
									<Button type="primary" htmlType="submit" className="login--form-button">
										Log in
									</Button>
									Or <a href="">register now!</a>
								</div>
							</Form.Item>
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}

export default LoginForm;
