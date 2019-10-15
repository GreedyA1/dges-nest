import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://GreedyAI:LICXaFNwTDL4YwJE@dges-bbn2u.gcp.mongodb.net/Dges?retryWrites=true&w=majority' //use ENV VARIABLES
      )
    ], 
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
