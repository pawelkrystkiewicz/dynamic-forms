import { Button } from 'antd';
import React from 'react';
import './style.css';
import routes from '../../routes';
import { IRoute } from '../../types/IRoute';

export default () => {
	return (
		<div className="navigation">
			{routes.map(({ title, path }: IRoute) => (
				<Button href={path}

				type={path === window.location.pathname ? 'primary' : 'default'}
				>
					{title}
				</Button>
			))}
		</div>
	);
};
