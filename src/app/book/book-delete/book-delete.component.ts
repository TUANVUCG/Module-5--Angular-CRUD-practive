import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book = {};

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.findById(id);
    });
  }

  ngOnInit() {
  }

  findById(id) {
    this.bookService.findById(id).subscribe(book => this.book = book);
  }

  deleteById(id) {
    this.bookService.delete(id).subscribe(() => {
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
