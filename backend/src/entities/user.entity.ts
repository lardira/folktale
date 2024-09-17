import { UUID } from 'crypto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tale } from './tale.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  img: string;

  @Column({ default: 'USER' })
  role: string;

  @OneToMany(() => Tale, (tale) => tale.author)
  tales: Tale[];
}
