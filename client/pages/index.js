import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
	const ticketList = tickets.map((ticket) => {
		return (
			<div class="card text-center" key={ticket.id} style={{width:'50%', marginBottom:'2%'}}>
				<div class="card-header">
					{ticket.title}
				</div>
				<div class="card-body">
				<p class="card-text">Buy Now @ Rs.{ticket.price}</p>
					<a href="/tickets/[ticketId]" class="btn btn-primary">View Event</a>
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
			<center><h1>Don't Miss Out</h1></center>
			<center>
			{ticketList}
			</center>
		</div>
	);
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
	const { data } = await client.get('/api/tickets');

	return { tickets: data };
};

export default LandingPage;
