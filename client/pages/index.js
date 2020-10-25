import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
	const ticketList = tickets.map((ticket) => {
		return (
			<div class="card text-center" key={ticket.id} style={{width:'50%', marginBottom:'2%', color:'#6A706E'}}>
				<div class="card-header">
					{ticket.title}
				</div>
				<div class="card-body">
				<p class="card-text">Buy Now @ Rs.{ticket.price}</p>
				<Link href='/tickets/[ticketId]' as={`/tickets/${ticket.id}`}>
						<a class='btn btn-primary'>View Event</a>
					</Link>
				</div>
			</div>
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
