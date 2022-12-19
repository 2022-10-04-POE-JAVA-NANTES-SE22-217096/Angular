import { Injectable } from '@angular/core';
import { BookInterface, BooksInterface } from '../interface/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // books: Book[] = [
  // books: Array<Book> = [
  private _books: BooksInterface = [
    {
      id: 1,
      title: "Super livre 1",
      price: 9.99,
      authors : []
    },
    {
      id: 2,
      title: "Comment survivre à une invasion zombie",
      price: 9.99,
      description: "Lorem ipsum dolor sit blablabla..."
    },
    {
      id: 3,
      title: "Comment faire pousser des patates sur Mars",
      price: 9.99
    },
  ];

  constructor() { }

  /**
   * Get Books list
   */
  public get books(): BooksInterface
  {
    return this._books;
  }

  /**
   * Set Books list
   */
  public set books(books: BooksInterface)
  {
    this._books = books;
  }

  /**
   * Get a specific book by ID
   */
  public getBook(id: number): BookInterface | undefined
  {
    for (let book of this._books)
    {
      if (book.id === id)
      {
        return book;
      }
    }

    return undefined;
  }
}
