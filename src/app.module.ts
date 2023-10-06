import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres-db',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'tododb',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UserModule,
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
