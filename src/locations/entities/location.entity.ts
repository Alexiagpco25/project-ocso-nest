import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn('increment')
  locationId: number;

  @Column('text')
  locationName: string;

  @Column('text')
  locationAdress: string;

  @Column('simple-array')
  locationLating: number[];

  @OneToOne(() => Manager)
  @JoinColumn({ name: "managerId" })  // Nombra la columna del manager en la BD
  manager: Manager;

  @ManyToOne(() => Region, (region) => region.locations)
  @JoinColumn({ name: "regionId" })  // Nombra la columna de la región en la BD
  region: Region;

  @OneToMany(() => Employee, (employee) => employee.location)
  employees: Employee[];
}

