import { IsString, IsEmail, IsNumber, MaxLength, IsOptional } from "class-validator"; 
import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity";

export class CreateManagerDto extends Manager {
    @IsString()
    @MaxLength(80) 
    managerFullName: string = '';  

    @IsString()
    @IsEmail()
    declare managerEmail: string;  

    @IsNumber()
    managerSalary: number = 0; 

    @IsString()
    @MaxLength(16)
    declare managerPhoneNumber: string; 

    @IsOptional()
    @IsNumber()
    declare location: Location;
}
