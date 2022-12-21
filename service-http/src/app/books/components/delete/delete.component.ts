import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';

const url = "http://localhost:3000/books";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  public id?: number;
  public book?: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void 
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.book = this.bookService.getBook( this.id );
    this.bookService.getBook(url, this.id);
    this.bookService.book.subscribe(data => this.book = data);
  }

  proceedToDelete()
  {
    this.bookService.deleteBook(url, this.id);
    this.router.navigate(['/livres']);
  }
}
