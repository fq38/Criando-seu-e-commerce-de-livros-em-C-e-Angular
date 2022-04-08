import { book } from './model/Book';
import { BookServices } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookServices!: BookServices;

  constructor(bookservices :BookServices ) {
    this.bookServices = bookservices;
   }

  ngOnInit(): void {
    this.livros  = this.bookServices.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);

  }))
 }

}
