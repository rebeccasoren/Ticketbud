import { Publisher, PaymentCreatedEvent, Subjects } from '@rsstickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
