import { Injectable } from '@angular/core';
import { BookInterface, BooksInterface } from '../interface/books.interface';

import { BehaviorSubject } from 'rxjs'; // TODO: 2.a Import de la classe BehaviorSubject
import { HttpClient, HttpHeaders } from '@angular/common/http'; // TODO: 3.a Import de la classe HttpClient


@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private _books: BooksInterface = [];
  // TODO: 2.b. Creation de la propriété Observable
  private _books = new BehaviorSubject<any>([]);
  private _book = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient // TODO: 3.b Instance de la classe HttpClient
  ){
    // TODO: 4. Requete HTTP - Methode 3
    // this.httpClient.get("http://localhost:3000/books").subscribe(response => this._books.next(response));
  }



  // ------ 
  // ------ All Books
  // ------ 

  public getBooksFromDatabase(url: string): void
  {
    // this.httpClient.get(url).subscribe(response => this._books = response)
    this.httpClient.get(url).subscribe(response => this._books.next(response));
  }

  public get books()
  {
    return this._books;
  }


  // ------ 
  // ------ One Book (by id)
  // ------ 

  public getBook(url: string, id: number)
  {
    url = `${url}/${id}`;
    this.httpClient.get(url).subscribe(response => this.book.next(response))
  }

  public get book()
  {
    return this._book;
  }


  // ------ 
  // ------ Create Book
  // ------ 

  public createBook(url: string, book: any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    // console.log(url, book);
    this.httpClient.post(url, book, options)
      .subscribe(response => console.log(response));
    
  }


  public editBook(url: string, id: number|undefined, book: any): void 
  {
    url = `${url}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    // console.log(url, book);
    this.httpClient.patch(url, book, options)
      .subscribe(response => console.log(response));
  }


  public deleteBook(url: string, id: number|undefined): void 
  {
    url = `${url}/${id}`;

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    // const options = {
    //   headers
    // };

    // console.log(url, book);
    // this.httpClient.delete(url, options)
    this.httpClient.delete(url)
      .subscribe(response => console.log(response));
  }
}
