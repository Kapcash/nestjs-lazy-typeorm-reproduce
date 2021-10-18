import { Controller, Get } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { Product } from './product/entities/product.entity';
// import { ProductService } from './product/product.service';

// Uncomment lines to use eager loaded module providers

@Controller()
export class AppController {
  constructor(
    private lazyModuleLoader: LazyModuleLoader, // private productService: ProductService,
  ) {}

  @Get()
  async createProduct(): Promise<Product> {
    const { ProductModule } = await import('./product/product.module');
    const productModule = await this.lazyModuleLoader.load(() => ProductModule);
    const { ProductService } = await import('./product/product.service');
    const productService = productModule.get(ProductService);

    return productService.create();
    // return this.productService.create();
  }
}
