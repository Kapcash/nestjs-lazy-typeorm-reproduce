import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      entities: [Product],
    }),
  ],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
