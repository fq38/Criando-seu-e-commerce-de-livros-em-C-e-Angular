import { book } from './../model/Book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: book;
  constructor() { }

  ngOnInit(): void {
  }

}
