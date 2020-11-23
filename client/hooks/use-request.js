import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
	const [errors, setErrors] = useState(null);

	const doRequest = async (props = {}) => {
		try {
			setErrors(null);
			const response = await axios[method](url, { ...body, ...props });

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (err) {
			setErrors(
				<center>
				<div className="alert alert-danger" role="alert" style={{width:'50%'}}>
					<h4>Oops!</h4>
				 	{err.response.data.errors[0].message}
				</div></center>
			);
		}
	};

	return { doRequest, errors };
};
