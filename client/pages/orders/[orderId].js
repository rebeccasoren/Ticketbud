import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const OrderShow = ({ order, currentUser }) => {
	const [timeLeft, setTimeLeft] = useState(0);
	const { doRequest, errors } = useRequest({
		url: '/api/payments',
		method: 'post',
		body: {
			orderId: order.id,
		},
		onSuccess: (payment) => Router.push('/orders'),
	});

	useEffect(() => {
		const findTimeLeft = () => {
			const msLeft = new Date(order.expiresAt) - new Date();
			setTimeLeft(Math.round(msLeft / 1000));
		};

		findTimeLeft();
		const timerId = setInterval(findTimeLeft, 1000);

		return () => {
			clearInterval(timerId);
		};
	}, [order]);

	if (timeLeft < 0) {
		return <div><center>Order Expired</center></div>;
	}

	return (
		<center>
		<div class="card">
		<h5 class="card-header">Time left to pay: {timeLeft} seconds</h5>
		<div class="card-body">
			<button class='btn btn-primary'>
			<StripeCheckout
				token={({ id }) => doRequest({ token: id })}
				stripeKey='pk_test_vjqqmSWaSH0M1UtOFXQr2eR200RtDhfKlp'
				amount={order.ticket.price * 100}
				email={currentUser.email}
				currency='inr'
			/>
			</button>
		</div>
		</div></center>
	);
};

OrderShow.getInitialProps = async (context, client) => {
	const { orderId } = context.query;
	const { data } = await client.get(`/api/orders/${orderId}`);

	return { order: data };
};

export default OrderShow;
