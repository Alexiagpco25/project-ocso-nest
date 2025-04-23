import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";

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
}
