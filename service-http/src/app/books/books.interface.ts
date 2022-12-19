export interface BookInterface {
  title: string;
  price: number;
  description?: string;
  authors?: []
}

export interface BooksInterface extends Array<BookInterface> {}