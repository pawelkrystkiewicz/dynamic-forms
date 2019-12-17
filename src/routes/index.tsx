import React from 'react';
import LoginPage from '../pages/login';
import RegisterForm from '../pages/register';

export default [
	{
		path: '/login',
		title: 'Login',
		component: <LoginPage />
	},
	{
		path: '/register',
		title: 'Register',
		component: <RegisterForm />
	}
];
