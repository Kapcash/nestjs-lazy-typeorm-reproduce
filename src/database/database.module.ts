import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

export interface DatabaseOptions {
  entities: any[];
}

@Module({})
export class DatabaseModule {
  static register(options: DatabaseOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: '0.0.0.0',
          port: 3306,
          username: 'root',
          password: 'example',
          database: 'nestdebug',
          retryAttempts: 5,
          synchronize: true,
          entities: options.entities,
        }),
        TypeOrmModule.forFeature(options.entities),
      ],
      providers: [],
      exports: [TypeOrmModule],
    };
  }
}
