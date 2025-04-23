import { IsString, IsUUID, MaxLength, IsNumber, IsInt, IsOptional, IsObject } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"; 
import { CreateProviderDto } from "src/providers/dto/create-provider.dto";  // Asegúrate de que el DTO del proveedor esté importado

export class CreateProductDto {
  
  @IsString()
  @IsUUID("4")
  @IsOptional()
  productId: string;

  @IsString()
  @MaxLength(40)
  productName: string;

  @IsNumber()
  price: number;

  @ApiProperty()
  @IsInt()
  countSeal: number;

  @IsObject()
  provider: CreateProviderDto; 
}


