import { BaseEntity, Entity, Unique, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Todo } from "src/todo/entities/todo.entity";
import { UserInfo } from "src/user/entities/user-info.entity";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "varchar" })
    username: string

    @Column({ type: "varchar" })
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Todo, todo => todo.user, { eager: true })
    todo: Todo[];

    @OneToOne(type => UserInfo, { eager: true })
    @JoinColumn()
    user_info: UserInfo;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password
    }
}