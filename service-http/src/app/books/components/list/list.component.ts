import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

const url = "http://localhost:3000/books";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public pageTitle:string = "Liste des livres";
  public books: any[] = [];

  constructor(
    private bookService: BookService,
  ){
    // TODO: 4. Requete HTTP - Methode 1
    // this.bookService.getBooksFromDatabase(url);
  }

  ngOnInit(): void
  {
    // TODO: 4. Requete HTTP - Methode 1
    this.bookService.getBooksFromDatabase(url);
    this.bookService.books.subscribe(data => this.books = data);
  }

}
