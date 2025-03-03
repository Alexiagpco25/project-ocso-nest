import { Provider } from "@nestjs/common";
import { IsEmail, IsOptional, IsString, MaxLength,IsUUID} from "class-validator";

export class CreateProviderDto {
    @IsString()
    @MaxLength(100)
    providerName: string;

    @IsEmail() 
    providerEmail: string;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    providerPhoneNumber?: string; 

    @IsUUID()
    provider: Provider; 

}
