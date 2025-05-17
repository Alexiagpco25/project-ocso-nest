import { IsEmail, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Employee } from "../entities/employee.entity";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateEmployeeDto extends Employee {
  @ApiProperty()
  @IsString()
  @MaxLength(30)
  declare employeeName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(70)
  declare employeeLastName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(10)
  declare employeePhoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  declare employeeEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  declare location: Location | string;

  @ApiPropertyOptional()
  @IsOptional()
  declare employeePhoto: string;
}
