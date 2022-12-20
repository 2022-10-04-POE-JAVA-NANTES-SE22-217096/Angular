import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { BookInterface } from '../../interface/books.interface';
import { BookService } from '../../service/book.service';

const url = "http://localhost:3000/books";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public book?: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void 
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.book = this.bookService.getBook( this.id );
    this.bookService.getBook(url, this.id);
    this.bookService.book.subscribe(data => this.book = data);
  }

}
