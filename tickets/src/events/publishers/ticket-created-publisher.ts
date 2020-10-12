import { Publisher, Subjects, TicketCreatedEvent } from '@rsstickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
