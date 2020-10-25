import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const TicketShow = ({ ticket }) => {
	const { doRequest, errors } = useRequest({
		url: '/api/orders',
		method: 'post',
		body: {
			ticketId: ticket.id,
		},
		onSuccess: (order) =>
			Router.push('/orders/[orderId]', `/orders/${order.id}`),
	});

	return (
		<div class="card text-center">
			<div class="card-header">
				{ticket.title}
			</div>
			<div class="card-body">
			<p class="card-text">Buy Now @ Rs. {ticket.price}</p>
				<button onClick={() => doRequest()} class="btn btn-primary">Purchase</button>
			</div>
			<div class="card-footer text-muted">
			</div>
			</div>
		// <div>
		// 	<h1>{ticket.title}</h1>
		// 	<h4>Price: {ticket.price} </h4>
		// 	{errors}
		// 	<button onClick={() => doRequest()} className='btn btn-primary'>
		// 		Purchase
		// 	</button>
		// </div>
	);
};

TicketShow.getInitialProps = async (context, client) => {
	const { ticketId } = context.query;
	const { data } = await client.get(`/api/tickets/${ticketId}`);
	return { ticket: data };
};
export default TicketShow;
