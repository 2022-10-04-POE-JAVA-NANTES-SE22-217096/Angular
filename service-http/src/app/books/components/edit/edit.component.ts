import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';

const url = "http://localhost:3000/books";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;
  
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      title: [],
      description: [],
      price: [],
    })
  }

  ngOnInit(): void 
  {
    // Get ID from URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Get Book data
    this.bookService.getBook(url, this.id);
    this.bookService.book.subscribe(data => {

      this.form.patchValue({
        title: data.title,
        description: data.description,
        price: data.price,
      });

    });
  }

  public submitBook(): void
  {
    this.bookService.editBook(url, this.id, this.form.value);
  }
}
