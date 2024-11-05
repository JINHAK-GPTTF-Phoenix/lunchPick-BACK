import { Injectable } from '@nestjs/common';
import { RestaurantPort } from '../../core/ports/out/restaurant.port';
import { Restaurant } from '../../core/domain/restaurant.entity';

@Injectable()
export class RestaurantRepository implements RestaurantPort {
  private readonly dummyRecommendations = [
    {
      id: 1,
      name: '레몬 파스타',
      rating: 4.5,
      color: 'bg-gradient-to-br from-purple-400 to-pink-300',
      tag: '새콤한',
    },
    {
      id: 2,
      name: '유자 샐러드',
      rating: 4.2,
      color: 'bg-gradient-to-br from-purple-400 to-pink-300',
      tag: '새콤한',
    },
    {
      id: 3,
      name: '마라탕',
      rating: 4.8,
      color: 'bg-gradient-to-br from-red-400 to-orange-300',
      tag: '매운',
    },
    {
      id: 4,
      name: '양념치킨',
      rating: 4.6,
      color: 'bg-gradient-to-br from-red-400 to-orange-300',
      tag: '매운',
    },
    {
      id: 5,
      name: '티라미수',
      rating: 4.7,
      color: 'bg-gradient-to-br from-yellow-400 to-orange-300',
      tag: '달콤한',
    },
    {
      id: 6,
      name: '초코케이크',
      rating: 4.5,
      color: 'bg-gradient-to-br from-yellow-400 to-orange-300',
      tag: '달콤한',
    },
    {
      id: 7,
      name: '김치찌개',
      rating: 4.9,
      color: 'bg-gradient-to-br from-red-500 to-orange-400',
      tag: '얼큰한',
    },
    {
      id: 8,
      name: '된장찌개',
      rating: 4.7,
      color: 'bg-gradient-to-br from-amber-600 to-yellow-400',
      tag: '구수한',
    },
    {
      id: 9,
      name: '냉면',
      rating: 4.6,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-300',
      tag: '시원한',
    },
    {
      id: 10,
      name: '물회',
      rating: 4.4,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-300',
      tag: '시원한',
    },
    {
      id: 11,
      name: '떡볶이',
      rating: 4.8,
      color: 'bg-gradient-to-br from-red-400 to-orange-300',
      tag: '매운',
    },
    {
      id: 12,
      name: '샤브샤브',
      rating: 4.5,
      color: 'bg-gradient-to-br from-green-400 to-emerald-300',
      tag: '담백한',
    },
    {
      id: 13,
      name: '연어덮밥',
      rating: 4.6,
      color: 'bg-gradient-to-br from-green-400 to-emerald-300',
      tag: '담백한',
    },
    {
      id: 14,
      name: '마카롱',
      rating: 4.3,
      color: 'bg-gradient-to-br from-yellow-400 to-orange-300',
      tag: '달콤한',
    },
    {
      id: 15,
      name: '칼국수',
      rating: 4.7,
      color: 'bg-gradient-to-br from-amber-600 to-yellow-400',
      tag: '구수한',
    },
    {
      id: 16,
      name: '쌀국수',
      rating: 4.4,
      color: 'bg-gradient-to-br from-green-400 to-emerald-300',
      tag: '담백한',
    },
    {
      id: 17,
      name: '순두부찌개',
      rating: 4.6,
      color: 'bg-gradient-to-br from-red-500 to-orange-400',
      tag: '얼큰한',
    },
    {
      id: 18,
      name: '레모네이드',
      rating: 4.2,
      color: 'bg-gradient-to-br from-purple-400 to-pink-300',
      tag: '새콤한',
    },
    {
      id: 19,
      name: '빙수',
      rating: 4.5,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-300',
      tag: '시원한',
    },
    {
      id: 20,
      name: '닭갈비',
      rating: 4.8,
      color: 'bg-gradient-to-br from-red-400 to-orange-300',
      tag: '매운',
    },
  ];

  async findByKeyword(keyword: string): Promise<Restaurant[]> {
    const filteredRestaurants = this.dummyRecommendations.filter((restaurant) =>
      restaurant.tag.includes(keyword),
    );

    return filteredRestaurants.map((restaurant) =>
      Restaurant.create(restaurant),
    );
  }
}
