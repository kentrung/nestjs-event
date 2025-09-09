import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsersService {
  constructor(private eventEmitter: EventEmitter2) {}

  createUser(body: any) {
    const user = {
      id: 1,
      name: body.name,
      email: body.email,
    };

    // Emit an event when a user is created
    this.eventEmitter.emit('user.created', user);

    return user;
  }
}
