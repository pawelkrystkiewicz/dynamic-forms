export default interface IFormSchema {
	id: string;
	label: string;
	iconType?: string;
	value?: string | number;
	name: string;
	placeholder: string;
	type: string;
	validationType: string;
	validations: IYupValidation[];
};
