import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

const url = "http://localhost:3000/books";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public form = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  constructor(
    private bookService: BookService,
    private router: Router
  ){}

  public submitBook(): void
  {
    // console.log( this.form.value );
    this.bookService.createBook(url, this.form.value);
  }
}
