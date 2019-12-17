import { Form, Icon, Input } from 'antd';
import React from 'react';
import IFormSchema from '../types/IFormShema';
import IFormFieldProps from '../types/IComponentProps';

export default (
	{ id, iconType, name, type, placeholder }: IFormSchema,
	{ onChange, value, error }: IFormFieldProps
) => {
	const renderError = error ? <strong>{error}</strong> : null;
	console.log(value);
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
			{renderError && [ <br />, { renderError } ]}
		</Form.Item>
	);
};
