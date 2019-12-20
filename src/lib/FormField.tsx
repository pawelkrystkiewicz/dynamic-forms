import { Form, Icon, Input } from 'antd';
import React, { Component } from 'react';
import './style.css';
class FormField extends Component<any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		const { error, value, iconType, type, placeholder, onChange, name } = this.props;

		const inputWarning = error ? <div className="form-field--warning">{error.charAt(0).toUpperCase()+error.substring(1)}</div> : null;

		return (
			<React.Fragment>
				<Form.Item>
					<Input
						prefix={iconType ? <Icon type={iconType} /> : null}
						name={name}
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
					/>
				</Form.Item>
				{inputWarning}
			</React.Fragment>
		);
	}
}
export default FormField;
