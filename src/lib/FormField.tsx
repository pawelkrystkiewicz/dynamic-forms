import { Form, Icon, Input } from 'antd';
import React from 'react';
import IFormSchema from '../types/IFormShema';
import IFormFieldProps from '../types/IComponentProps';

export default (
	{ id, label, iconType, name, type, placeholder }: IFormSchema,
	{ onChange, value, error }: IFormFieldProps
) => {
	const renderError = error ? <strong>{error}</strong> : null;
	return (
		<Form.Item>
			<label>{label}</label>&nbsp;&nbsp;
			<Input
				prefix={<Icon type={iconType} />}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<br />
			{renderError}
		</Form.Item>
	);
};
