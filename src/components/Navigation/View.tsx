import { Button } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const examples = [
	{
		route: '/login',
		title: 'Login'
	},
	{
		route: '/register',
		title: 'Register'
	}
];

export default () => {
	return <div>{examples.map(({ title, route }) => <Button href={route}>{title}</Button>)}</div>;
};
