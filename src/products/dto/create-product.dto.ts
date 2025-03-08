import { IsString, IsUUID, MaxLength, IsNumber, IsInt, IsOptional, IsObject } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"; 
import { CreateProviderDto } from "src/providers/dto/create-provider.dto";  // Asegúrate de que el DTO del proveedor esté importado

export class CreateProductDto {
  
  @ApiPropertyOptional()
  @IsString()
  @IsUUID("4")
  @IsOptional()
  productId: string;

  @ApiProperty()
  @IsString()
  @MaxLength(40)
  productName: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsInt()
  countSeal: number;

  @ApiProperty()
  @IsObject()
  provider: CreateProviderDto; 
}


