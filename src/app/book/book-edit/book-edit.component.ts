import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getById(id);
    });
  }

  ngOnInit() {
  }

  getById(id) {
    return this.bookService.findById(id).subscribe(book => {
      this.book = book;
    });
  }

  editById(id) {
    return this.bookService.editById(id, this.book).subscribe(() => {
        alert('Success');
      },
      () => {
        alert('Fail');
      });
  }
}
