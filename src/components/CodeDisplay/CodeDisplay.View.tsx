import React from 'react';
import './style.css';

export default (values: any) => (
	<pre className="form--code-block">
		<code>{JSON.stringify(values, null, 2)}</code>
	</pre>
);
