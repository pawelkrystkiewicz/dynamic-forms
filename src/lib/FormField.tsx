import { Form, Icon, Input } from 'antd';
import React, { Component } from 'react';
import IFormSchema from '../types/IFormShema';
import IFormFieldProps from '../types/IComponentProps';

class FormField extends Component<any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		const { error, value, iconType, type, placeholder, onChange, name } = this.props;
		const renderError = error ? <strong>{error}</strong> : null;

		return (
			<Form.Item>
				<Input
					prefix={iconType ? <Icon type={iconType} /> : null}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{error && <br />}
				{renderError}
			</Form.Item>
		);
	}
}
export default FormField;
