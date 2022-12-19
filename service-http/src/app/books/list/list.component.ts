import { Component } from '@angular/core';
import { BooksInterface } from './../books.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // books: Book[] = [
  // books: Array<Book> = [
  books: BooksInterface = [
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





  // Titre de page
  // > Type : Chaine de caractères
  pageTitle:string = "Liste des livres";


  // Liste de livres
  // > Type : Tableau de chaine de caractères
  // books: string[] = [
  //   "Super livre 1",
  //   "Comment survivre à une invasion zombie",
  //   "Comment pousser des patates sur Mars",
  // ];


  items: any[] = [
    "string",
    true,
    42,
    {},
    []
  ];

}
