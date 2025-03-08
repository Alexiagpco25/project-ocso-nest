import { IsOptional,IsEmail, IsObject, IsString, MaxLength } from "class-validator";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LocationEmployeeDto{

  @ApiProperty()
  locationId: number;

  @ApiPropertyOptional()
  locationName: string;

  @ApiPropertyOptional()
  locationLatLng: number[];

  @ApiProperty()
  locationAddress: string;

}


export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  employeeName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(70)
  employeeLastName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  employeePhoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  employeeEmail: string;

  @ApiPropertyOptional()
  @IsObject()
  @IsOptional()
  location: Location;
}


