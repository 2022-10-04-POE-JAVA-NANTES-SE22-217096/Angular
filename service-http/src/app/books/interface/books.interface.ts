export interface BookInterface {
  id?: number;
  title: string;
  price: number;
  description?: string;
  authors?: []
}

export interface BooksInterface extends Array<BookInterface> {}