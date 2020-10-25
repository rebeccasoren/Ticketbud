import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
	const ticketList = tickets.map((ticket) => {
		return (
			<div class="card text-center" key={ticket.id} style="width:40%">
				<div class="card-body">
				<h5 class="card-title">{ticket.title}</h5>
				<p class="card-text">Buy Now: Rs.{ticket.price}</p>
					<a href="/tickets/[ticketId]" class="btn btn-primary">View</a>
				</div>
				<div class="card-footer text-muted">
					Available
				</div>
				</div>
			/*<tr key={ticket.id}>
				<td>{ticket.title}</td>
				<td>{ticket.price}</td>
				<td>
					<Link href='/tickets/[ticketId]' as={`/tickets/${ticket.id}`}>
						<a>View</a>
					</Link>
				</td>
			</tr>*/
		);
	});

	return (
		<div>
			<center><h1>Book Your Tickets</h1></center>
			{/* <table className='table'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Link</th>
					</tr>
				</thead> 
				<tbody>{ticketList}</tbody>
			</table> */}
			{ticketList}
		</div>
	);
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
	const { data } = await client.get('/api/tickets');

	return { tickets: data };
};

export default LandingPage;
