import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { ProductModule } from './product/product.module';
import { AppService } from './app.service';

@Module({
  imports: [
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
