import { User } from "src/auth/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Todo extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "varchar"})
    title: string;

    @Column()
    description: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdDate: Date;

    @CreateDateColumn({ type: 'timestamp' })
    updatedDate: Date;

    @ManyToOne(type => User, user => user.todo, { eager: false })
    user: User;

    // @Column({ type: 'int' })
    // userId: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
