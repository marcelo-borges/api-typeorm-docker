import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Launch {
  constructor(valor: number, description: string, date: Date, user: User) {
    this.valor = valor;
    this.description = description;
    this.date = date;
    this.user = user;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "float" })
  valor: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => User)
  user: User;
}
