import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class UserInfo extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'pet_name', type: "varchar", nullable: true })
    petName: string;

    @Column({ type: "varchar", nullable: true })
    photo: string;

    @Column({ type: "varchar", nullable: true })
    modified_photo: string;

    @Column({ type: "varchar", nullable: true })
    address: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
