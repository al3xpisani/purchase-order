import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '99fdf5f4-687f-4175-ab14-a6fead5da7c1',
      name: 'Product 1',
      description: 'Product 1 description ',
      price: 200,
      image_url: 'http://www.localhost:9000/products/1.png',
    },
    {
      id: '2d94d79c-9a4c-4490-b35c-0b280561db1d',
      name: 'Product 2',
      description: 'Product 2 description ',
      price: 200,
      image_url: 'http://www.localhost:9000/products/2.png',
    },
  ]);
  await app.close();
}
bootstrap();
