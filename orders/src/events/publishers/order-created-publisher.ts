import { Publisher, OrderCreatedEvent, Subjects } from '@rsstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
