import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({
    type: 'decimal',
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value), // string을 number로 변환
    },
  })
  rating: number;

  @Column({ type: 'varchar', length: 150 })
  color: string;

  @Column({ type: 'varchar', length: 45 })
  tag: string;

  getProperties() {
    return {
      idx: this.idx,
      name: this.name,
      rating: this.rating,
      color: this.color,
      tag: this.tag,
    };
  }
}
