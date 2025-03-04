import { IsString, IsEmail, IsNumber, MaxLength } from "class-validator"; 
import { Manager } from "../entities/manager.entity";

export class CreateManagerDto extends Manager {
    @IsString()
    @MaxLength(80)  // Corregido aquí
    managerFullName: string = '';  

    @IsString()
    @IsEmail()
    managerEmail: string = '';  

    @IsNumber()
    managerSalary: string = ''; 
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string = '';  
}
