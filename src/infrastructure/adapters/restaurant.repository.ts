import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { RestaurantPort } from '../../core/ports/out/restaurant.port';
import { Restaurant } from '../../core/domain/restaurant.entity';
import { SearchRestaurantQuery } from '../../core/dto/search-restaurant.query';

@Injectable()
export class RestaurantRepository implements RestaurantPort {
  constructor(
    @InjectRepository(Restaurant)
    private readonly repository: Repository<Restaurant>,
  ) {}

  async findByKeyword(query: SearchRestaurantQuery): Promise<Restaurant[]> {
    return await this.repository.find({
      where: [
        { tag: Like(`%${query.getKeyword()}%`) },
        // { description: Like(`%${query.getKeyword()}%`) },
        // { category: Like(`%${query.getKeyword()}%`) },
      ],
    });
  }
}
