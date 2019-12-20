import React from 'react';
import LoginPage from '../pages/login';
import RegisterForm from '../pages/register';
import { IRoute } from '../types/IRoute';

const routes: IRoute[] = [

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

export default routes;
