import IYupValidation from '../types/IValidation';
const yup = require('yup');

export function createYupSchema(schema: any, config: any) {
	const { id, validationType, validations = [] } = config;

	if (!yup[validationType]) {
		return schema;
	}

	let validator = yup[validationType]();

	validations.forEach(({ type, value, message }: IYupValidation) => {
		if (!validator[type]) {
			return;
		}
		console.log(type, value, message);
		validator = validator[type](value, message);
	});

	schema[id] = validator;
	return schema;
}
