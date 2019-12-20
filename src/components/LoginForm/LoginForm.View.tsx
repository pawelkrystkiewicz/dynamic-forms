import React, { Component } from 'react';
import { Formik } from 'formik';
import FormField from '../../lib/FormField';
import formData from './schema.json';
import { createYupSchema } from '../../lib/yupSchemaGenerator';
import * as yup from 'yup';
import { Form, Button, Checkbox } from 'antd';
import './styles.css';
import CodeDisplay from '../CodeDisplay/CodeDisplay.View';

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
			<div className="form--component">
				<Formik
					initialValues={initialValues}
					validationSchema={validateSchema}
					onSubmit={(values, actions) => {
						console.log('values', values);
						console.log('actions', actions);
					}}
				>
					{(props) => (
						<div className="form--elements-comparison">
							<Form onSubmit={props.handleSubmit} className="form">
								{this.renderFormElements(props)}
								<Form.Item>
									<Button type="primary" htmlType="submit" block>
										Log in
									</Button>
								</Form.Item>
							</Form>
							<CodeDisplay values={props.values} />
						</div>
					)}
				</Formik>
			</div>
		);
	}
}

export default LoginForm;
