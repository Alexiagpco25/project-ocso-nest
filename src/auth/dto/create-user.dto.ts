import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto extends User {
  @ApiProperty({
    default: "user@gmail.com"
  })
  @IsEmail()
  declare userEmail: string;

  @ApiProperty({
    default: "23213fe4231"
  })
  @IsString()
  @MinLength(8)
  declare userPassword: string;

  @ApiProperty({
    default: "Employee"
  })
  @IsOptional()
  @IsIn(["Admin", "Employee", "Manager"])
  declare userRoles: string[];
}

