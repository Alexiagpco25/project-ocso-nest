import { Provider } from "src/providers/entities/provider.entity";
import { IsString, IsUUID, MaxLength, IsNumber, IsInt, IsOptional, IsObject } from "class-validator";

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

    @IsInt()
    countSeal: number;

    @IsObject()
    provider: Provider; 
}

