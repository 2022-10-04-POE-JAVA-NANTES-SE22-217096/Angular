import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../../interface/books.interface';
import { BookService } from '../../service/book.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public pageTitle:string = "Liste des livres";

  public books: BooksInterface = [];


  items: any[] = [
    "string",
    true,
    42,
    {},
    []
  ];


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void
  {
    this.books = this.bookService.books;
  }

}
