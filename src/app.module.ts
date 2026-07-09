import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    AuthModule,
    TasksModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
          },
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
