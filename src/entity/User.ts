import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Launch } from "./Launch";

@Entity()
export class User {
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Launch, (launch) => launch.user)
  launchs: Launch[];
}
