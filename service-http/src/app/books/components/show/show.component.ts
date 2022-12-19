import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookInterface } from '../../interface/books.interface';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id?: number;
  book?: BookInterface;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void 
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBook( this.id );
  }

}
