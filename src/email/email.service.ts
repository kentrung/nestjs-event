import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EmailService {
  @OnEvent('user.created')
  handleUserCreatedEvent(payload: any) {
    console.log('EmailService=======>', payload);
  }
}
