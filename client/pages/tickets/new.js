import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const NewTicket = () => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const { doRequest, errors } = useRequest({
		url: '/api/tickets',
		method: 'post',
		body: {
			title,
			price,
		},
		onSuccess: () => Router.push('/'),
	});

	const onSubmit = (event) => {
		event.preventDefault();
		doRequest();
	};

	const onBlur = () => {
		const value = parseFloat(price);
		if (isNaN(value)) {
			return;
		}
		setPrice(value.toFixed(2));
	};

	return (
		<div class="main">
            <p class="sign" align="center">Upcoming Event</p>
            <form class="form1" onSubmit={onSubmit}>
				<input class="un" type="text" align="center" placeholder="Event Name" 
						value={title}
						onChange={(e) => setTitle(e.target.value)} />
				<input class="un" type="text" align="center" placeholder="Ticket Price" 
						value={price}
						onBlur={onBlur}
						onChange={(e) => setPrice(e.target.value)} />
                <button class="submit" align="center">Sell Ticket</button>
                <p class="forgot" align="center"><a href="#">Admits One</a></p>
                </form>
            </div>
		/*<div>
			<center><h1>Create A Ticket</h1></center>
			<center>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Concert Title</label>
					<input
						style={{width: '70%',
						padding: '12px 20px',
						boxSizing: 'border-box'}}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='form-control'
					/>
				</div>
				<div className='form-group'>
					<label>Concert Price</label>
					<input
						style={{width: '70%',
							padding: '12px 20px',
							boxSizing: 'border-box'}}
						value={price}
						onBlur={onBlur}
						onChange={(e) => setPrice(e.target.value)}
						className='form-control'
					/>
				</div>
				{errors}
				<button className='btn btn-success'>Submit</button>
			</form>
			</center>
		</div>*/
	);
};
export default NewTicket;
