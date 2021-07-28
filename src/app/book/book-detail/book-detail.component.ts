import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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
}
