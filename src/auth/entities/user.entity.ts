import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
@PrimaryGeneratedColumn('uuid')
userId: string;
@Column('text')
userEmail: string;
@Column('text',{
    unique: true,
})
userPassword: string;
@Column('simple-array', {
    default:"Employee"

})
userRoles: string[];

@OneToOne(() => Manager)
manager: Manager;

@OneToOne(() => Employee,)
employee: Employee;

}