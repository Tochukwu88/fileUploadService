import {Entity,PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("simple-array")
    fileUrl: string[];

}
