import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EventEmitterModule.forRoot(), UsersModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
