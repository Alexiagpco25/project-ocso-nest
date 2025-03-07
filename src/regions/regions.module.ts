import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { Region } from './entities/region.entity';
import { AuthModule } from 'src/auth/auth.module'; // Asegúrate de importar el AuthModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Region]),
    AuthModule,  // Importa el AuthModule aquí
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
  exports: [RegionsService],
})
export class RegionsModule {}
