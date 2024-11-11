export class SearchRestaurantQuery {
  private readonly keyword: string;

  constructor(keyword: string) {
    this.keyword = keyword;
    this.validate();
  }

  private validate(): void {
    if (!this.keyword || this.keyword.trim().length === 0) {
      throw new Error('검색어는 필수입니다.');
    }
  }

  getKeyword(): string {
    return this.keyword.trim();
  }
}
